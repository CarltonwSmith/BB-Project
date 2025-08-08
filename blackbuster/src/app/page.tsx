"use client";

"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Search, Play, Plus, Info, Menu, Bell, User, Star } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MovieDetailModal } from '@/components/MovieDetailModal';
import { SearchModal } from '@/components/SearchModal';
import {
  Movie,
  movieData,
  getMoviesByCategory,
  getContinueWatching,
  getNewReleases
} from '@/lib/movieData';

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const featuredMovie = movieData.find(m => m.id === 1) || movieData[0]; // Black Panther as featured
  const continueWatching = getContinueWatching();
  const newReleases = getNewReleases();
  const trendingMovies = getMoviesByCategory('trending');
  const awardWinners = getMoviesByCategory('awards');
  const documentaries = getMoviesByCategory('documentaries');
  const classicCinema = getMoviesByCategory('classic');
  const comedies = getMoviesByCategory('comedy');
  const nineties = getMoviesByCategory('90s');

  const movieCategories = [
    ...(continueWatching.length > 0 ? [{ title: "Continue Watching", movies: continueWatching }] : []),
    ...(newReleases.length > 0 ? [{ title: "New Releases", movies: newReleases }] : []),
    { title: "Trending Now", movies: trendingMovies },
    { title: "90's Black Cinema", movies: nineties },
    { title: "Award Winners", movies: awardWinners },
    { title: "Documentaries", movies: documentaries },
    { title: "Classic Black Cinema", movies: classicCinema },
    { title: "Comedy", movies: comedies },
  ];

  const openMovieModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsMovieModalOpen(true);
  };

  const MovieCard = ({ movie, showProgress = false }: { movie: Movie; showProgress?: boolean }) => (
    <Card
      className="flex-shrink-0 w-48 bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 cursor-pointer group movie-card-hover"
      onClick={() => openMovieModal(movie)}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-72 object-cover rounded-t-md"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Movie badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {movie.isNew && (
              <Badge className="bg-red-600 hover:bg-red-700 text-xs">New</Badge>
            )}
            <Badge className="bg-yellow-600 hover:bg-yellow-700 text-xs">
              {movie.rating}
            </Badge>
          </div>

          {/* Rating overlay */}
          <div className="absolute top-2 right-2">
            <div className="flex items-center bg-black/70 rounded px-2 py-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-xs text-white">{movie.imdbRating}</span>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h4 className="font-semibold text-white mb-1 truncate">{movie.title}</h4>
          <p className="text-sm text-gray-400">{movie.year} • {movie.duration}</p>

          {/* Genres */}
          <div className="flex flex-wrap gap-1 mt-2">
            {movie.genre.slice(0, 2).map((genre, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                {genre}
              </Badge>
            ))}
          </div>

          {/* Continue watching progress */}
          {showProgress && movie.watchProgress && (
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Continue watching</span>
                <span>{movie.watchProgress}%</span>
              </div>
              <Progress value={movie.watchProgress} className="h-1" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 md:px-8 fixed w-full top-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600">BLACKBUSTER</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Documentaries</a>
            <a href="#" className="hover:text-gray-300 transition-colors">My List</a>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Button
              variant="ghost"
              onClick={() => setIsSearchModalOpen(true)}
              className="text-gray-400 hover:text-white hover:bg-gray-800 w-64 justify-start"
            >
              <Search className="mr-2 h-4 w-4" />
              Search movies...
            </Button>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="hidden md:flex text-gray-400 hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>

          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-gray-700 text-white">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end">
              <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                My List
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700" align="end">
                <DropdownMenuItem
                  className="text-white hover:bg-gray-800 focus:bg-gray-800"
                  onClick={() => setIsSearchModalOpen(true)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                  Movies
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                  TV Shows
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                  Documentaries
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                  My List
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="text-white hover:bg-gray-800 focus:bg-gray-800">
                  Profile
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%), url(${featuredMovie.image})`
          }}
        />
        <div className="relative flex items-center h-full px-4 md:px-8">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700">Featured</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">{featuredMovie.title}</h2>
            <div className="flex items-center space-x-4 mb-6 text-sm">
              <span className="bg-yellow-600 px-2 py-1 rounded text-black font-semibold">{featuredMovie.rating}</span>
              <span>{featuredMovie.year}</span>
              <span>{featuredMovie.duration}</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span>{featuredMovie.imdbRating}</span>
              </div>
            </div>
            <p className="text-lg mb-8 leading-relaxed max-w-xl">{featuredMovie.description}</p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-semibold"
                onClick={() => openMovieModal(featuredMovie)}
              >
                <Play className="mr-2 h-5 w-5" />
                Play
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-white hover:bg-gray-800"
                onClick={() => openMovieModal(featuredMovie)}
              >
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-gray-800">
                <Plus className="mr-2 h-5 w-5" />
                My List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Categories */}
      <div className="px-4 md:px-8 pb-20 space-y-12">
        {movieCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
            <div className="flex space-x-4 overflow-x-auto pb-4 movie-row scrollbar-hide">
              {category.movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  showProgress={category.title === "Continue Watching"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4 text-red-600">BLACKBUSTER</h5>
              <p className="text-sm text-gray-400">Celebrating Black cinema and storytelling.</p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Browse</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Movies</a></li>
                <li><a href="#" className="hover:text-white">TV Shows</a></li>
                <li><a href="#" className="hover:text-white">Documentaries</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Account</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">My List</a></li>
                <li><a href="#" className="hover:text-white">Settings</a></li>
                <li><a href="#" className="hover:text-white">Help</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Connect</h6>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Blackbuster. Celebrating the excellence of Black cinema.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <MovieDetailModal
        movie={selectedMovie}
        isOpen={isMovieModalOpen}
        onClose={() => setIsMovieModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onMovieSelect={openMovieModal}
      />
    </div>
  );
}
