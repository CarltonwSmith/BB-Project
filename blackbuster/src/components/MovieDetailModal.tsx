"use client";

import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Movie } from '@/lib/movieData';
import { Play, Plus, Share, Star, Clock, Calendar, Film } from 'lucide-react';

interface MovieDetailModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MovieDetailModal({ movie, isOpen, onClose }: MovieDetailModalProps) {
  if (!movie) return null;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-gray-700 text-white">
        <DialogTitle className="sr-only">{movie.title}</DialogTitle>

        {/* Hero Section */}
        <div className="relative">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full h-16 w-16 p-0">
                <Play className="h-6 w-6 ml-1" />
              </Button>
            </div>
          </div>

          {/* Title and Basic Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              {movie.isNew && <Badge className="bg-red-600 hover:bg-red-700">New</Badge>}
              <Badge variant="outline" className="border-gray-400 text-white">
                {movie.rating}
              </Badge>
              <span className="text-sm text-gray-300">{movie.year}</span>
              <span className="text-sm text-gray-300">{movie.duration}</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{movie.imdbRating}/10</span>
              </div>
              <div className="flex items-center gap-1">
                {renderStars(movie.userRating)}
                <span className="text-sm ml-1">({movie.userRating}/5)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 flex-1">
            <Play className="mr-2 h-5 w-5" />
            Play
          </Button>
          <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-gray-800">
            <Plus className="mr-2 h-5 w-5" />
            My List
          </Button>
          <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-gray-800">
            <Share className="h-5 w-5" />
          </Button>
        </div>

        {/* Continue Watching Progress */}
        {movie.watchProgress && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Continue Watching</span>
              <span className="text-sm text-gray-300">{movie.watchProgress}% complete</span>
            </div>
            <Progress value={movie.watchProgress} className="h-2" />
          </div>
        )}

        {/* Tabs */}
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gray-700">Overview</TabsTrigger>
            <TabsTrigger value="cast" className="data-[state=active]:bg-gray-700">Cast & Crew</TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-gray-700">Details</TabsTrigger>
            <TabsTrigger value="similar" className="data-[state=active]:bg-gray-700">Similar</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Synopsis</h3>
                <p className="text-gray-300 leading-relaxed">{movie.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Film className="mr-2 h-4 w-4" />
                    Director
                  </h4>
                  <p className="text-gray-300">{movie.director}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Genres</h4>
                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((g, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700 text-white">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cast" className="mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Main Cast</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-2">
                      <AvatarFallback className="bg-gray-700 text-white text-lg">
                        {actor.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">{actor}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-semibold mb-2">Director</h4>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarFallback className="bg-gray-700 text-white">
                      {movie.director.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-gray-300">{movie.director}</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="mr-3 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-semibold">Release Year</p>
                    <p className="text-gray-300">{movie.year}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-gray-400" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p className="text-gray-300">{movie.duration}</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Rating</p>
                  <Badge className="bg-yellow-600 hover:bg-yellow-700">{movie.rating}</Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">IMDb Rating</p>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-2" />
                    <span className="text-lg font-bold">{movie.imdbRating}</span>
                    <span className="text-gray-400 ml-1">/10</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">User Rating</p>
                  <div className="flex items-center">
                    {renderStars(movie.userRating)}
                    <span className="ml-2 text-gray-300">({movie.userRating}/5)</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="similar" className="mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">More Like This</h3>
              <p className="text-gray-400">Similar movies will be recommended based on your viewing history and preferences.</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
