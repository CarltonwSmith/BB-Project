"use client";

import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Movie, searchMovies, movieData } from '@/lib/movieData';
import { Search, Filter, X, Star, Calendar, Play } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMovieSelect: (movie: Movie) => void;
}

export function SearchModal({ isOpen, onClose, onMovieSelect }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [filters, setFilters] = useState({
    genre: '',
    year: 0,
    rating: 0
  });
  const [showFilters, setShowFilters] = useState(false);

  // Get unique genres from movie data
  const genres = Array.from(new Set(movieData.flatMap(movie => movie.genre))).sort();
  const years = Array.from(new Set(movieData.map(movie => movie.year))).sort((a, b) => b - a);

  useEffect(() => {
    if (query.trim() || filters.genre || filters.year || filters.rating) {
      const searchResults = searchMovies(query, {
        genre: filters.genre || undefined,
        year: filters.year || undefined,
        rating: filters.rating || undefined
      });
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [query, filters]);

  const clearFilters = () => {
    setFilters({ genre: '', year: 0, rating: 0 });
  };

  const hasActiveFilters = filters.genre || filters.year || filters.rating;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-900 border-gray-700 text-white">
        <DialogTitle className="sr-only">Search Movies</DialogTitle>

        {/* Search Header */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for movies, actors, directors..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-lg"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-2 h-8 w-8 p-0 text-gray-400 hover:text-white"
                onClick={() => setQuery('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-gray-600 text-white hover:bg-gray-800"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <Badge className="ml-2 bg-red-600 hover:bg-red-700 text-xs">
                  {[filters.genre, filters.year, filters.rating].filter(Boolean).length}
                </Badge>
              )}
            </Button>

            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="text-gray-400 hover:text-white">
                Clear All
              </Button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-800 rounded-lg">
              <div>
                <label className="block text-sm font-medium mb-2">Genre</label>
                <Select value={filters.genre} onValueChange={(value) => setFilters(prev => ({ ...prev, genre: value }))}>
                  <SelectTrigger className="bg-gray-700 border-gray-600">
                    <SelectValue placeholder="All Genres" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="">All Genres</SelectItem>
                    {genres.map(genre => (
                      <SelectItem key={genre} value={genre}>{genre}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Year</label>
                <Select value={filters.year.toString()} onValueChange={(value) => setFilters(prev => ({ ...prev, year: parseInt(value) || 0 }))}>
                  <SelectTrigger className="bg-gray-700 border-gray-600">
                    <SelectValue placeholder="All Years" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="0">All Years</SelectItem>
                    {years.map(year => (
                      <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Minimum Rating: {filters.rating > 0 ? filters.rating.toFixed(1) : 'Any'}
                </label>
                <Slider
                  value={[filters.rating]}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, rating: value[0] }))}
                  max={10}
                  min={0}
                  step={0.1}
                  className="mt-2"
                />
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {query.trim() === '' && !hasActiveFilters ? (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-400">Start typing to search for movies...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No movies found matching your criteria.</p>
              {hasActiveFilters && (
                <Button variant="ghost" onClick={clearFilters} className="mt-2 text-gray-400 hover:text-white">
                  Try clearing filters
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Found {results.length} movie{results.length !== 1 ? 's' : ''}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((movie) => (
                  <Card
                    key={movie.id}
                    className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer group"
                    onClick={() => {
                      onMovieSelect(movie);
                      onClose();
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <div className="relative flex-shrink-0">
                          <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-20 h-30 object-cover rounded-md"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center rounded-md">
                            <Play className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white truncate">{movie.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="border-gray-400 text-gray-300 text-xs">
                              {movie.rating}
                            </Badge>
                            <span className="text-gray-400 text-sm">{movie.year}</span>
                            <span className="text-gray-400 text-sm">{movie.duration}</span>
                          </div>

                          <div className="flex items-center mt-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-sm text-gray-300">{movie.imdbRating}</span>
                          </div>

                          <div className="flex flex-wrap gap-1 mt-2">
                            {movie.genre.slice(0, 2).map((genre, index) => (
                              <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                {genre}
                              </Badge>
                            ))}
                            {movie.genre.length > 2 && (
                              <Badge variant="secondary" className="bg-gray-700 text-gray-300 text-xs">
                                +{movie.genre.length - 2}
                              </Badge>
                            )}
                          </div>

                          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                            {movie.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
