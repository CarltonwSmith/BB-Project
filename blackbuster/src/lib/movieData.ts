export interface Movie {
  id: number;
  title: string;
  image: string;
  year: number;
  genre: string[];
  rating: string;
  imdbRating: number;
  userRating: number;
  duration: string;
  description: string;
  director: string;
  cast: string[];
  trailer?: string;
  category: string;
  isNew?: boolean;
  watchProgress?: number; // 0-100 for continue watching
}

export const movieData: Movie[] = [
  // Trending Now
  {
    id: 1,
    title: "Black Panther",
    image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    year: 2018,
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: "PG-13",
    imdbRating: 7.3,
    userRating: 4.5,
    duration: "2h 14m",
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and confront a challenger from his country's past.",
    director: "Ryan Coogler",
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"],
    trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
    category: "trending"
  },
  {
    id: 2,
    title: "Hidden Figures",
    image: "https://image.tmdb.org/t/p/w500/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg",
    year: 2016,
    genre: ["Drama", "Biography", "History"],
    rating: "PG",
    imdbRating: 7.8,
    userRating: 4.7,
    duration: "2h 7m",
    description: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
    director: "Theodore Melfi",
    cast: ["Taraji P. Henson", "Octavia Spencer", "Janelle Monáe", "Kevin Costner"],
    category: "trending",
    watchProgress: 65
  },
  {
    id: 3,
    title: "Moonlight",
    image: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_.jpg",
    year: 2016,
    genre: ["Drama", "Coming-of-age"],
    rating: "R",
    imdbRating: 7.4,
    userRating: 4.6,
    duration: "1h 51m",
    description: "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    director: "Barry Jenkins",
    cast: ["Mahershala Ali", "Naomie Harris", "Trevante Rhodes", "Alex Hibbert"],
    category: "trending"
  },
  {
    id: 4,
    title: "Fences",
    image: "https://m.media-amazon.com/images/M/MV5BOTkyOTc3ODM3N15BMl5BanBnXkFtZTgwOTgxNzk0OTE@._V1_.jpg",
    year: 2016,
    genre: ["Drama"],
    rating: "PG-13",
    imdbRating: 7.2,
    userRating: 4.4,
    duration: "2h 19m",
    description: "A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.",
    director: "Denzel Washington",
    cast: ["Denzel Washington", "Viola Davis", "Jovan Adepo", "Stephen McKinley Henderson"],
    category: "trending",
    watchProgress: 23
  },
  {
    id: 5,
    title: "Get Out",
    image: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    year: 2017,
    genre: ["Horror", "Thriller"],
    rating: "R",
    imdbRating: 7.7,
    userRating: 4.8,
    duration: "1h 44m",
    description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    director: "Jordan Peele",
    cast: ["Daniel Kaluuya", "Allison Williams", "Catherine Keener", "Bradley Whitford"],
    category: "trending"
  },

  // Award Winners
  {
    id: 6,
    title: "12 Years a Slave",
    image: "https://image.tmdb.org/t/p/w500/xdANQijuNrJaw1HA61rDccME4Tm.jpg",
    year: 2013,
    genre: ["Drama", "Biography", "History"],
    rating: "R",
    imdbRating: 8.1,
    userRating: 4.9,
    duration: "2h 14m",
    description: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
    director: "Steve McQueen",
    cast: ["Chiwetel Ejiofor", "Michael Fassbender", "Lupita Nyong'o", "Sarah Paulson"],
    category: "awards"
  },
  {
    id: 7,
    title: "Selma",
    image: "https://m.media-amazon.com/images/M/MV5BZjE5ODM3YTAtNzAxMS00ZmUzLThiZTAtNTcwNWQ5MjNlMjk0XkEyXkFqcGc@._V1_.jpg",
    year: 2014,
    genre: ["Drama", "Biography", "History"],
    rating: "PG-13",
    imdbRating: 7.5,
    userRating: 4.6,
    duration: "2h 8m",
    description: "A chronicle of Dr. Martin Luther King, Jr.'s campaign to secure equal voting rights via an epic march from Selma to Montgomery, Alabama, in 1965.",
    director: "Ava DuVernay",
    cast: ["David Oyelowo", "Carmen Ejogo", "Tom Wilkinson", "Giovanni Ribisi"],
    category: "awards",
    watchProgress: 45
  },
  {
    id: 8,
    title: "If Beale Street Could Talk",
    image: "https://m.media-amazon.com/images/M/MV5BNjA3YzIwNzEtZTE1Yy00NzYxLWE2NDQtZWZjOWRhOGZmNDllXkEyXkFqcGc@._V1_.jpg",
    year: 2018,
    genre: ["Drama", "Romance"],
    rating: "R",
    imdbRating: 7.1,
    userRating: 4.5,
    duration: "1h 59m",
    description: "A young woman embraces her pregnancy while she and her family set out to prove her childhood friend and lover innocent of a crime he didn't commit.",
    director: "Barry Jenkins",
    cast: ["KiKi Layne", "Stephan James", "Regina King", "Teyonah Parris"],
    category: "awards"
  },

  // Continue with more movies...
  {
    id: 9,
    title: "Ma Rainey's Black Bottom",
    image: "https://m.media-amazon.com/images/M/MV5BNWJlZTNkYTEtNzJlMC00OWQ2LTg5MjAtNTJlYzM0ZWQ3MzkxXkEyXkFqcGc@._V1_.jpg",
    year: 2020,
    genre: ["Drama", "Music"],
    rating: "R",
    imdbRating: 6.9,
    userRating: 4.3,
    duration: "1h 34m",
    description: "Tensions rise when the trailblazing Mother of the Blues and her band gather at a Chicago recording studio in 1927.",
    director: "George C. Wolfe",
    cast: ["Viola Davis", "Chadwick Boseman", "Glynn Turman", "Colman Domingo"],
    category: "awards",
    isNew: true
  },

  // Documentaries
  {
    id: 11,
    title: "I Am Not Your Negro",
    image: "https://m.media-amazon.com/images/M/MV5BMjEyNzIzMTk3Ml5BMl5BanBnXkFtZTgwNDE1Nzc1MDI@._V1_.jpg",
    year: 2016,
    genre: ["Documentary"],
    rating: "PG-13",
    imdbRating: 7.8,
    userRating: 4.7,
    duration: "1h 33m",
    description: "Writer James Baldwin tells the story of race in modern America with his unfinished novel, Remember This House.",
    director: "Raoul Peck",
    cast: ["Samuel L. Jackson", "James Baldwin"],
    category: "documentaries"
  },
  {
    id: 12,
    title: "13th",
    image: "https://m.media-amazon.com/images/M/MV5BNjQ4MTMxNDQ3N15BMl5BanBnXkFtZTgwODk2OTU2OTE@._V1_.jpg",
    year: 2016,
    genre: ["Documentary"],
    rating: "TV-MA",
    imdbRating: 8.2,
    userRating: 4.8,
    duration: "1h 40m",
    description: "An in-depth look at the prison system in the United States and how it reveals the nation's history of racial inequality.",
    director: "Ava DuVernay",
    cast: ["Melina Abdullah", "Michelle Alexander", "Cory Booker"],
    category: "documentaries"
  },

  // Classic Black Cinema
  {
    id: 16,
    title: "Do the Right Thing",
    image: "https://m.media-amazon.com/images/M/MV5BNzQ1MjQxNzkzNl5BMl5BanBnXkFtZTgwNTY0OTI1MDE@._V1_.jpg",
    year: 1989,
    genre: ["Drama", "Comedy"],
    rating: "R",
    imdbRating: 8.0,
    userRating: 4.6,
    duration: "2h",
    description: "On the hottest day of the year on a street in the Bedford-Stuyvesant section of Brooklyn, everyone's hate and bigotry smolders and builds until it explodes into violence.",
    director: "Spike Lee",
    cast: ["Danny Aiello", "Spike Lee", "John Turturro", "Ruby Dee"],
    category: "classic"
  },
  {
    id: 17,
    title: "Boyz n the Hood",
    image: "https://m.media-amazon.com/images/M/MV5BNjU4MTQ5ZWUtODZkYS00YzNmLTgxOTYtYjEwYTRjYTI5MzgzXkEyXkFqcGc@._V1_.jpg",
    year: 1991,
    genre: ["Drama", "Crime"],
    rating: "R",
    imdbRating: 7.8,
    userRating: 4.5,
    duration: "1h 52m",
    description: "Follows the lives of three young males living in the Crenshaw ghetto of Los Angeles, dissecting questions of race, relationships, violence, and future prospects.",
    director: "John Singleton",
    cast: ["Laurence Fishburne", "Cuba Gooding Jr.", "Ice Cube", "Morris Chestnut"],
    category: "classic",
    watchProgress: 78
  },

  // Comedy
  {
    id: 21,
    title: "Coming to America",
    image: "https://m.media-amazon.com/images/M/MV5BMTUzODA1NjMtMTkzMy00NWI4LTlhOGUtODNhZTM1ZTI0NjE5XkEyXkFqcGc@._V1_.jpg",
    year: 1988,
    genre: ["Comedy", "Romance"],
    rating: "R",
    imdbRating: 7.1,
    userRating: 4.4,
    duration: "1h 57m",
    description: "An extremely pampered African prince travels to Queens, New York, and goes undercover to find a wife that he can respect for her intelligence and strong will.",
    director: "John Landis",
    cast: ["Eddie Murphy", "Arsenio Hall", "Shari Headley", "John Amos"],
    category: "comedy"
  },
  {
    id: 22,
    title: "Friday",
    image: "https://m.media-amazon.com/images/M/MV5BNzUzYjg5ZDctOGQ3My00NGVhLTlmMDMtZjVmZTc4MDZjNGFjXkEyXkFqcGc@._V1_.jpg",
    year: 1995,
    genre: ["Comedy"],
    rating: "R",
    imdbRating: 7.2,
    userRating: 4.6,
    duration: "1h 31m",
    description: "It's Friday, and Craig and Smokey must come up with $200 they owe a local bully or there won't be a Saturday.",
    director: "F. Gary Gray",
    cast: ["Ice Cube", "Chris Tucker", "Nia Long", "Tommy Lister Jr."],
    category: "90s"
  },

  // 90's Black Cinema
  {
    id: 30,
    title: "New Jack City",
    image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWUtNzM2OC00NGQ3LTlhZjctNWU3ZDA4NjJlOGI5XkEyXkFqcGc@._V1_.jpg",
    year: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    rating: "R",
    imdbRating: 6.7,
    userRating: 4.3,
    duration: "1h 37m",
    description: "A crime lord ascends to power and becomes megalomaniacal while a maverick police detective vows to stop him.",
    director: "Mario Van Peebles",
    cast: ["Wesley Snipes", "Ice-T", "Allen Payne", "Chris Rock"],
    category: "90s"
  },
  {
    id: 31,
    title: "Juice",
    image: "https://m.media-amazon.com/images/M/MV5BMjNjNjgzM2ItNWNjZC00YWRlLTgzNzgtMzg2ZDY5YzdhNGQ5XkEyXkFqcGc@._V1_.jpg",
    year: 1992,
    genre: ["Crime", "Drama", "Thriller"],
    rating: "R",
    imdbRating: 7.0,
    userRating: 4.5,
    duration: "1h 35m",
    description: "Four inner-city Black teenagers get caught up in the pursuit of power and happiness, which they refer to as 'the juice'.",
    director: "Ernest R. Dickerson",
    cast: ["Omar Epps", "Tupac Shakur", "Jermaine Hopkins", "Khalil Kain"],
    category: "90s"
  },
  {
    id: 32,
    title: "Menace II Society",
    image: "https://m.media-amazon.com/images/M/MV5BOWJkNzNhNWEtNTVlYS00M2RmLTk5YjYtY2FkMjkzMjE3N2VkXkEyXkFqcGc@._V1_.jpg",
    year: 1993,
    genre: ["Crime", "Drama"],
    rating: "R",
    imdbRating: 7.5,
    userRating: 4.6,
    duration: "1h 37m",
    description: "A young street hustler attempts to escape the rigors and temptations of the ghetto in a quest for a better life.",
    director: "Albert Hughes, Allen Hughes",
    cast: ["Tyrin Turner", "Larenz Tate", "June Kyoto Lu", "Toshi Toda"],
    category: "90s"
  },
  {
    id: 33,
    title: "Poetic Justice",
    image: "https://m.media-amazon.com/images/M/MV5BNjExODE0OTYtNGExNy00NzI0LThiOWEtNzEzNDY4MzBhMTRhXkEyXkFqcGc@._V1_.jpg",
    year: 1993,
    genre: ["Drama", "Romance"],
    rating: "R",
    imdbRating: 6.1,
    userRating: 4.1,
    duration: "1h 49m",
    description: "In this film, we see the world through the eyes of main character Justice, a young African-American poet.",
    director: "John Singleton",
    cast: ["Janet Jackson", "Tupac Shakur", "Regina King", "Joe Torry"],
    category: "90s"
  },
  {
    id: 34,
    title: "Higher Learning",
    image: "https://m.media-amazon.com/images/M/MV5BMTM3NDMzNjMtNTMzMS00YmJlLWFkYjYtMjBjNmQ5YjNhODIyXkEyXkFqcGc@._V1_.jpg",
    year: 1995,
    genre: ["Drama"],
    rating: "R",
    imdbRating: 6.5,
    userRating: 4.2,
    duration: "2h 7m",
    description: "People from all different walks of life, encounter racial tension, rape, responsibility, and the meaning of an education on a university campus.",
    director: "John Singleton",
    cast: ["Omar Epps", "Kristy Swanson", "Michael Rapaport", "Jennifer Connelly"],
    category: "90s"
  },
  {
    id: 35,
    title: "Dead Presidents",
    image: "https://m.media-amazon.com/images/M/MV5BYmI3ZjlmNzYtNzY5NS00YzJmLTgwMzctMjM1YWI3NzAxNzZmXkEyXkFqcGc@._V1_.jpg",
    year: 1995,
    genre: ["Action", "Crime", "Drama"],
    rating: "R",
    imdbRating: 6.9,
    userRating: 4.3,
    duration: "1h 59m",
    description: "A Vietnam vet adjusts to life after the war while dealing with racial problems and urban decay in the Bronx.",
    director: "Albert Hughes, Allen Hughes",
    cast: ["Larenz Tate", "Keith David", "Chris Tucker", "Freddy Rodríguez"],
    category: "90s"
  },
  {
    id: 36,
    title: "Set It Off",
    image: "https://m.media-amazon.com/images/M/MV5BOWFhMmJhMGEtNTQ3OC00N2Y4LWI5YzEtOGE0OGI1YjE4ZTNmXkEyXkFqcGc@._V1_.jpg",
    year: 1996,
    genre: ["Action", "Crime", "Drama"],
    rating: "R",
    imdbRating: 6.9,
    userRating: 4.5,
    duration: "2h 3m",
    description: "Desperation drives four inner-city women to bank robbery in Los Angeles, then they start mistrusting each other.",
    director: "F. Gary Gray",
    cast: ["Jada Pinkett Smith", "Queen Latifah", "Vivica A. Fox", "Kimberly Elise"],
    category: "90s"
  },
  {
    id: 37,
    title: "Love Jones",
    image: "https://m.media-amazon.com/images/M/MV5BZDFjNjVhZTYtY2ZjOC00MWI5LTg4NDYtOGUxMWEwMDdlNjkzXkEyXkFqcGc@._V1_.jpg",
    year: 1997,
    genre: ["Drama", "Romance"],
    rating: "R",
    imdbRating: 7.3,
    userRating: 4.7,
    duration: "1h 49m",
    description: "Darius Lovehall is a young black poet in Chicago who starts dating Nina Moseley, a beautiful and talented photographer.",
    director: "Theodore Witcher",
    cast: ["Larenz Tate", "Nia Long", "Isaiah Washington", "Bill Bellamy"],
    category: "90s"
  },
  {
    id: 38,
    title: "Eve's Bayou",
    image: "https://m.media-amazon.com/images/M/MV5BMTI1OTUwNTYxNV5BMl5BanBnXkFtZTcwNzI4MTIyMQ@@._V1_.jpg",
    year: 1997,
    genre: ["Drama"],
    rating: "R",
    imdbRating: 7.2,
    userRating: 4.6,
    duration: "1h 49m",
    description: "What did little Eve see--and how will it haunt her? Husband, father and womanizer Louis Batiste is the head of an affluent family, but it's the women who rule this gothic world of secrets, lies and mystic forces.",
    director: "Kasi Lemmons",
    cast: ["Jurnee Smollett", "Meagan Good", "Lynn Whitfield", "Samuel L. Jackson"],
    category: "90s"
  }
];

export const getMoviesByCategory = (category: string) => {
  return movieData.filter(movie => movie.category === category);
};

export const getContinueWatching = () => {
  return movieData.filter(movie => movie.watchProgress && movie.watchProgress > 0);
};

export const getNewReleases = () => {
  return movieData.filter(movie => movie.isNew);
};

export const searchMovies = (query: string, filters?: {
  genre?: string;
  year?: number;
  rating?: number;
}) => {
  let results = movieData.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase()) ||
    movie.cast.some(actor => actor.toLowerCase().includes(query.toLowerCase())) ||
    movie.director.toLowerCase().includes(query.toLowerCase())
  );

  if (filters?.genre) {
    results = results.filter(movie =>
      movie.genre.some(g => g.toLowerCase() === filters.genre?.toLowerCase())
    );
  }

  if (filters?.year) {
    results = results.filter(movie => movie.year === filters.year);
  }

  if (filters?.rating) {
    results = results.filter(movie => movie.imdbRating >= filters.rating!);
  }

  return results;
};
