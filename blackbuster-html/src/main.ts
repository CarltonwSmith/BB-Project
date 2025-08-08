// Movie Data Interface
interface Movie {
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
  watchProgress?: number;
}

// TV Show Data Interface
interface TVShow {
  id: number;
  title: string;
  image: string;
  year: number;
  genre: string[];
  rating: string;
  imdbRating: number;
  userRating: number;
  seasons: number;
  episodes: number;
  description: string;
  creator: string;
  cast: string[];
  trailer?: string;
  category: string;
  isNew?: boolean;
  watchProgress?: number;
  status: 'ongoing' | 'ended';
}

// Complete Movie Database
const movieData: Movie[] = [
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
    image: "https://image.tmdb.org/t/p/w500/4911T5FbJ9eD2Faz5Z8cT3SUaTy.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/2z4dCE2XkZDfhX4RHjfhh4y9lPB.jpg",
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

  // 90's Black Cinema
  {
    id: 22,
    title: "Friday",
    image: "https://image.tmdb.org/t/p/w500/3aPLHQdIoR6CEiH2DLfYNI3qRj3.jpg",
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
  {
    id: 30,
    title: "New Jack City",
    image: "https://image.tmdb.org/t/p/w500/2qE7PHGfQMDXrSqH7gQYJJWP2Qq.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/pKaEy0bx9WQ8n7EOLfbBKXfGKfE.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/9JtGGRRn3LpP0l0UYJGglnZlbNV.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/a3sJCKl32wfPOGwblVRm0mzeDSi.jpg",
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
    id: 36,
    title: "Set It Off",
    image: "https://image.tmdb.org/t/p/w500/kgOmKkUGCKh2C8EUAmbBcVMFqwf.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/wKJZfFlWH8QbBX6V3SkTxKJjjCx.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/wq4lhMB4WI8maHmBNVBqmmrbwOJ.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/qhUIOTSi3kr4290tKrVyeriyvrv.jpg",
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
  {
    id: 9,
    title: "Ma Rainey's Black Bottom",
    image: "https://image.tmdb.org/t/p/w500/pvtyAsKKz6BjHAhsy1de8iCO9QR.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/uah2ej6JBv9rgw6GGqxtF9w17w4.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/68i4G0gVInBv2Gg8wXaKnZfU5EG.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/9JOZxRlMPsP4zq8Gp8rOX2hZCDl.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/2ZOy7cAyRgB4dDAYKxpKw3j8Rl0.jpg",
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
  }
];

// Complete TV Show Database
const tvShowData: TVShow[] = [
  {
    id: 101,
    title: "Atlanta",
    image: "https://image.tmdb.org/t/p/w500/8HZyGMnPLgaAWQ0b3VJAhLPagBX.jpg",
    year: 2016,
    genre: ["Comedy", "Drama"],
    rating: "TV-MA",
    imdbRating: 8.6,
    userRating: 4.7,
    seasons: 4,
    episodes: 41,
    description: "Two cousins work through the Atlanta music scene in order to better their lives and the lives of their families.",
    creator: "Donald Glover",
    cast: ["Donald Glover", "Brian Tyree Henry", "LaKeith Stanfield", "Zazie Beetz"],
    category: "tvshows",
    status: "ended",
    isNew: false
  },
  {
    id: 102,
    title: "Insecure",
    image: "https://image.tmdb.org/t/p/w500/2EEEG7BxuCZDDddyOGZCs1xCgOf.jpg",
    year: 2016,
    genre: ["Comedy", "Drama"],
    rating: "TV-MA",
    imdbRating: 7.7,
    userRating: 4.5,
    seasons: 5,
    episodes: 44,
    description: "Follows the friendship of two modern-day Black women and all of their uncomfortable experiences and racy tribulations.",
    creator: "Issa Rae",
    cast: ["Issa Rae", "Yvonne Orji", "Jay Ellis", "Natasha Rothwell"],
    category: "tvshows",
    status: "ended",
    watchProgress: 45
  },
  {
    id: 103,
    title: "Power",
    image: "https://image.tmdb.org/t/p/w500/ctSNBZrNvqRO0qiAb9ofWP73k8V.jpg",
    year: 2014,
    genre: ["Crime", "Drama"],
    rating: "TV-MA",
    imdbRating: 8.0,
    userRating: 4.6,
    seasons: 6,
    episodes: 63,
    description: "James 'Ghost' St. Patrick, a wealthy New York nightclub owner who has it all; dreaming of a legitimate life, he must balance his two identities.",
    creator: "Courtney A. Kemp",
    cast: ["Omari Hardwick", "Lela Loren", "Naturi Naughton", "Joseph Sikora"],
    category: "tvshows",
    status: "ended"
  },
  {
    id: 104,
    title: "Abbott Elementary",
    image: "https://image.tmdb.org/t/p/w500/8VRJqvVXOzqhNX5OZ7cVe2kw7TK.jpg",
    year: 2021,
    genre: ["Comedy"],
    rating: "TV-PG",
    imdbRating: 8.1,
    userRating: 4.8,
    seasons: 3,
    episodes: 35,
    description: "A workplace comedy centered around a group of dedicated teachers and a tone-deaf principal in a Philadelphia public school.",
    creator: "Quinta Brunson",
    cast: ["Quinta Brunson", "Tyler James Williams", "Janelle James", "Sheryl Lee Ralph"],
    category: "tvshows",
    status: "ongoing",
    isNew: true
  },
  {
    id: 105,
    title: "The Wire",
    image: "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
    year: 2002,
    genre: ["Crime", "Drama"],
    rating: "TV-MA",
    imdbRating: 9.3,
    userRating: 4.9,
    seasons: 5,
    episodes: 60,
    description: "The Baltimore drug scene, seen through the eyes of drug dealers and law enforcement.",
    creator: "David Simon",
    cast: ["Dominic West", "John Doman", "Idris Elba", "Frankie Faison"],
    category: "tvshows",
    status: "ended"
  },
  {
    id: 106,
    title: "black-ish",
    image: "https://image.tmdb.org/t/p/w500/ga1zJ6UmqpZfdO0KVnBaGpVZ8HI.jpg",
    year: 2014,
    genre: ["Comedy", "Family"],
    rating: "TV-PG",
    imdbRating: 7.1,
    userRating: 4.3,
    seasons: 8,
    episodes: 175,
    description: "A family man struggles to gain a sense of cultural identity while raising his kids in a predominantly white, upper-middle-class neighborhood.",
    creator: "Kenya Barris",
    cast: ["Anthony Anderson", "Tracee Ellis Ross", "Marcus Scribner", "Miles Brown"],
    category: "tvshows",
    status: "ended",
    watchProgress: 78
  },
  {
    id: 107,
    title: "Empire",
    image: "https://image.tmdb.org/t/p/w500/qXYGUtHjgC3jNDVyJEo6DKj1c6Q.jpg",
    year: 2015,
    genre: ["Drama", "Music"],
    rating: "TV-14",
    imdbRating: 7.4,
    userRating: 4.4,
    seasons: 6,
    episodes: 102,
    description: "A hip-hop mogul must choose a successor among his three sons who are battling for control over his multi-million dollar company.",
    creator: "Lee Daniels",
    cast: ["Terrence Howard", "Taraji P. Henson", "Bryshere Y. Gray", "Jussie Smollett"],
    category: "tvshows",
    status: "ended"
  },
  {
    id: 108,
    title: "Watchmen",
    image: "https://image.tmdb.org/t/p/w500/m8rWq3j73ZGhDuSCZWOLEvw7G5s.jpg",
    year: 2019,
    genre: ["Drama", "Sci-Fi", "Superhero"],
    rating: "TV-MA",
    imdbRating: 8.2,
    userRating: 4.6,
    seasons: 1,
    episodes: 9,
    description: "Set in an alternate history where masked vigilantes are treated as outlaws, Watchmen embraces the nostalgia of the original groundbreaking graphic novel.",
    creator: "Damon Lindelof",
    cast: ["Regina King", "Yahya Abdul-Mateen II", "Jeremy Irons", "Jean Smart"],
    category: "tvshows",
    status: "ended"
  },
  {
    id: 109,
    title: "Scandal",
    image: "https://image.tmdb.org/t/p/w500/gplzgMdPnGykl4Q6Gj8e2NNWZH.jpg",
    year: 2012,
    genre: ["Drama", "Political"],
    rating: "TV-14",
    imdbRating: 7.7,
    userRating: 4.5,
    seasons: 7,
    episodes: 124,
    description: "A former White House Communications Director starts her own crisis management firm only to realize her clients are not the only ones with secrets.",
    creator: "Shonda Rhimes",
    cast: ["Kerry Washington", "Tony Goldwyn", "Bellamy Young", "Jeff Perry"],
    category: "tvshows",
    status: "ended",
    watchProgress: 32
  },
  {
    id: 110,
    title: "Dear White People",
    image: "https://image.tmdb.org/t/p/w500/i4zYu1f1V0fT7ZtR8H7W3fYV5l7.jpg",
    year: 2017,
    genre: ["Comedy", "Drama"],
    rating: "TV-MA",
    imdbRating: 6.2,
    userRating: 4.1,
    seasons: 4,
    episodes: 40,
    description: "Students of color navigate the daily slights and slippery politics of life at an Ivy League college that's not nearly as progressive as it thinks.",
    creator: "Justin Simien",
    cast: ["Logan Browning", "Brandon P. Bell", "DeRon Horton", "Antoinette Robertson"],
    category: "tvshows",
    status: "ended"
  },
  {
    id: 111,
    title: "The Fresh Prince of Bel-Air",
    image: "https://image.tmdb.org/t/p/w500/3d6tBbClvVjgF6ZV2bcQMkt471P.jpg",
    year: 1990,
    genre: ["Comedy", "Family"],
    rating: "TV-PG",
    imdbRating: 7.9,
    userRating: 4.7,
    seasons: 6,
    episodes: 148,
    description: "A streetwise teenager is sent to live with his wealthy relatives in the upscale neighborhood of Bel-Air, where his lifestyle clashes with theirs.",
    creator: "Andy Borowitz",
    cast: ["Will Smith", "James Avery", "Alfonso Ribeiro", "Tatyana Ali"],
    category: "tvshows",
    status: "ended"
  },
  {
    id: 112,
    title: "Martin",
    image: "https://image.tmdb.org/t/p/w500/bQWFZSx6Xr06S1mU3DjcWVCKIZh.jpg",
    year: 1992,
    genre: ["Comedy"],
    rating: "TV-PG",
    imdbRating: 7.6,
    userRating: 4.5,
    seasons: 5,
    episodes: 132,
    description: "The random misadventures of Martin Payne, a Detroit radio DJ with friends and a girlfriend who put up with his various shenanigans.",
    creator: "John Bowman",
    cast: ["Martin Lawrence", "Tisha Campbell", "Carl Anthony Payne II", "Thomas Mikal Ford"],
    category: "tvshows",
    status: "ended"
  }
];

// Utility Functions
const getMoviesByCategory = (category: string): Movie[] => {
  return movieData.filter(movie => movie.category === category);
};

const getContinueWatching = (): Movie[] => {
  return movieData.filter(movie => movie.watchProgress && movie.watchProgress > 0);
};

const getNewReleases = (): Movie[] => {
  return movieData.filter(movie => movie.isNew);
};

const getTVShowsByCategory = (category: string): TVShow[] => {
  return tvShowData.filter(show => show.category === category);
};

const searchMovies = (query: string, filters?: {
  genre?: string;
  year?: number;
  rating?: number;
}): Movie[] => {
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

  if (filters?.rating !== undefined) {
    const minRating = filters.rating;
    results = results.filter(movie => movie.imdbRating >= minRating);
  }

  return results;
};

const searchTVShows = (query: string, filters?: {
  genre?: string;
  year?: number;
  rating?: number;
}): TVShow[] => {
  let results = tvShowData.filter(show =>
    show.title.toLowerCase().includes(query.toLowerCase()) ||
    show.cast.some(actor => actor.toLowerCase().includes(query.toLowerCase())) ||
    show.creator.toLowerCase().includes(query.toLowerCase())
  );

  if (filters?.genre) {
    results = results.filter(show =>
      show.genre.some(g => g.toLowerCase() === filters.genre?.toLowerCase())
    );
  }

  if (filters?.year) {
    results = results.filter(show => show.year === filters.year);
  }

  if (filters?.rating !== undefined) {
    const minRating = filters.rating;
    results = results.filter(show => show.imdbRating >= minRating);
  }

  return results;
};

const searchAll = (query: string, filters?: {
  genre?: string;
  year?: number;
  rating?: number;
}): (Movie | TVShow)[] => {
  const movieResults = searchMovies(query, filters);
  const tvResults = searchTVShows(query, filters);
  return [...movieResults, ...tvResults];
};

// DOM Manipulation Functions
const createTVShowCard = (show: TVShow, showProgress = false): string => {
  const badges = [
    show.isNew ? '<span class="badge badge-new">New</span>' : '',
    `<span class="badge badge-rating">${show.rating}</span>`
  ].filter(Boolean).join('');

  const progressBar = showProgress && show.watchProgress ? `
    <div class="progress-container">
      <div class="progress-info">
        <span>Continue watching</span>
        <span>${show.watchProgress}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${show.watchProgress}%"></div>
      </div>
    </div>
  ` : '';

  const genreTags = show.genre.slice(0, 2).map(genre =>
    `<span class="genre-tag">${genre}</span>`
  ).join('');

  const seasonInfo = show.seasons === 1 ? '1 Season' : `${show.seasons} Seasons`;

  return `
    <div class="movie-card" onclick="openTVShowModal(${show.id})">
      <div class="movie-poster-container">
        <img src="${show.image}" alt="${show.title}" class="movie-poster" loading="lazy">
        <div class="movie-overlay">
          <svg class="play-overlay-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21"></polygon>
          </svg>
        </div>
        <div class="movie-badges">${badges}</div>
        <div class="movie-rating">
          <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
          </svg>
          <span>${show.imdbRating}</span>
        </div>
      </div>
      <div class="movie-info">
        <h4 class="movie-title">${show.title}</h4>
        <div class="movie-meta">
          <span>${show.year}</span>
          <span>•</span>
          <span>${seasonInfo}</span>
        </div>
        <div class="movie-genres">${genreTags}</div>
        ${progressBar}
      </div>
    </div>
  `;
};

const createMovieCard = (movie: Movie, showProgress = false): string => {
  const badges = [
    movie.isNew ? '<span class="badge badge-new">New</span>' : '',
    `<span class="badge badge-rating">${movie.rating}</span>`
  ].filter(Boolean).join('');

  const progressBar = showProgress && movie.watchProgress ? `
    <div class="progress-container">
      <div class="progress-info">
        <span>Continue watching</span>
        <span>${movie.watchProgress}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${movie.watchProgress}%"></div>
      </div>
    </div>
  ` : '';

  const genreTags = movie.genre.slice(0, 2).map(genre =>
    `<span class="genre-tag">${genre}</span>`
  ).join('');

  return `
    <div class="movie-card" onclick="openMovieModal(${movie.id})">
      <div class="movie-poster-container">
        <img src="${movie.image}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <div class="movie-overlay">
          <svg class="play-overlay-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21"></polygon>
          </svg>
        </div>
        <div class="movie-badges">${badges}</div>
        <div class="movie-rating">
          <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
          </svg>
          <span>${movie.imdbRating}</span>
        </div>
      </div>
      <div class="movie-info">
        <h4 class="movie-title">${movie.title}</h4>
        <div class="movie-meta">
          <span>${movie.year}</span>
          <span>•</span>
          <span>${movie.duration}</span>
        </div>
        <div class="movie-genres">${genreTags}</div>
        ${progressBar}
      </div>
    </div>
  `;
};

const renderMovieSection = (containerId: string, movies: Movie[], showProgress = false) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = movies.map(movie => createMovieCard(movie, showProgress)).join('');
  }
};

const renderTVShowSection = (containerId: string, shows: TVShow[], showProgress = false) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = shows.map(show => createTVShowCard(show, showProgress)).join('');
  }
};

const createSearchResultCard = (item: Movie | TVShow): string => {
  const genreTags = item.genre.slice(0, 2).map(genre =>
    `<span class="genre-tag">${genre}</span>`
  ).join('');

  const isMovie = 'duration' in item;
  const durationOrSeasons = isMovie ? item.duration : `${item.seasons} Season${item.seasons !== 1 ? 's' : ''}`;
  const clickHandler = isMovie ? `openMovieModal(${item.id})` : `openTVShowModal(${item.id})`;

  return `
    <div class="search-result-card" onclick="${clickHandler}; closeSearchModal();">
      <div class="search-result-content">
        <img src="${item.image}" alt="${item.title}" class="search-result-poster" loading="lazy">
        <div class="search-result-info">
          <h4 class="search-result-title">${item.title}</h4>
          <div class="search-result-meta">
            <span class="badge badge-rating">${item.rating}</span>
            <span>${item.year}</span>
            <span>${durationOrSeasons}</span>
            <div class="rating">
              <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
              </svg>
              <span>${item.imdbRating}</span>
            </div>
          </div>
          <div class="movie-genres">${genreTags}</div>
          <p class="search-result-description">${item.description}</p>
        </div>
      </div>
    </div>
  `;
};

// Modal Functions
const openTVShowModal = (showId: number) => {
  const show = tvShowData.find(s => s.id === showId);
  if (!show) return;

  const modal = document.getElementById('movieModal');
  if (!modal) return;

  // Populate modal content
  const modalImage = document.getElementById('modalImage') as HTMLImageElement;
  const modalTitle = document.getElementById('modalTitle');
  const modalBadges = document.getElementById('modalBadges');
  const modalRating = document.getElementById('modalRating');
  const modalYear = document.getElementById('modalYear');
  const modalDuration = document.getElementById('modalDuration');
  const modalImdbRating = document.getElementById('modalImdbRating');
  const modalDescription = document.getElementById('modalDescription');
  const modalDirector = document.getElementById('modalDirector');
  const modalGenres = document.getElementById('modalGenres');
  const modalCast = document.getElementById('modalCast');

  if (modalImage) modalImage.src = show.image;
  if (modalTitle) modalTitle.textContent = show.title;
  if (modalBadges) {
    modalBadges.innerHTML = [
      show.isNew ? '<span class="badge badge-new">New</span>' : '',
      `<span class="badge badge-rating">${show.rating}</span>`,
      `<span class="badge" style="background: var(--primary-red); color: white;">${show.status === 'ongoing' ? 'Ongoing' : 'Ended'}</span>`
    ].filter(Boolean).join('');
  }
  if (modalRating) modalRating.textContent = show.rating;
  if (modalYear) modalYear.textContent = show.year.toString();
  if (modalDuration) modalDuration.textContent = `${show.seasons} Season${show.seasons !== 1 ? 's' : ''} • ${show.episodes} Episodes`;
  if (modalImdbRating) modalImdbRating.textContent = show.imdbRating.toString();
  if (modalDescription) modalDescription.textContent = show.description;
  if (modalDirector) modalDirector.textContent = show.creator;

  if (modalGenres) {
    modalGenres.innerHTML = show.genre.map(genre =>
      `<span class="genre-tag">${genre}</span>`
    ).join('');
  }

  if (modalCast) {
    modalCast.innerHTML = show.cast.map(actor => {
      const initials = actor.split(' ').map(n => n[0]).join('');
      return `
        <div class="cast-member">
          <div class="cast-avatar">${initials}</div>
          <div class="cast-name">${actor}</div>
        </div>
      `;
    }).join('');
  }

  // Update details tab labels for TV shows
  const detailsYear = document.getElementById('detailsYear');
  const detailsDuration = document.getElementById('detailsDuration');
  const detailsRating = document.getElementById('detailsRating');
  const detailsImdbRating = document.getElementById('detailsImdbRating');

  if (detailsYear) detailsYear.textContent = show.year.toString();
  if (detailsDuration) detailsDuration.textContent = `${show.seasons} Season${show.seasons !== 1 ? 's' : ''} • ${show.episodes} Episodes`;
  if (detailsRating) detailsRating.textContent = show.rating;
  if (detailsImdbRating) detailsImdbRating.textContent = `${show.imdbRating}/10`;

  // Show continue watching progress if applicable
  const progressContainer = document.getElementById('continueWatchingProgress');
  const progressPercent = document.getElementById('progressPercent');
  const progressFill = document.getElementById('progressFill') as HTMLElement;

  if (show.watchProgress && progressContainer && progressPercent && progressFill) {
    progressContainer.style.display = 'block';
    progressPercent.textContent = `${show.watchProgress}% complete`;
    progressFill.style.width = `${show.watchProgress}%`;
  } else if (progressContainer) {
    progressContainer.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const openMovieModal = (movieId: number) => {
  const movie = movieData.find(m => m.id === movieId);
  if (!movie) return;

  const modal = document.getElementById('movieModal');
  if (!modal) return;

  // Populate modal content
  const modalImage = document.getElementById('modalImage') as HTMLImageElement;
  const modalTitle = document.getElementById('modalTitle');
  const modalBadges = document.getElementById('modalBadges');
  const modalRating = document.getElementById('modalRating');
  const modalYear = document.getElementById('modalYear');
  const modalDuration = document.getElementById('modalDuration');
  const modalImdbRating = document.getElementById('modalImdbRating');
  const modalDescription = document.getElementById('modalDescription');
  const modalDirector = document.getElementById('modalDirector');
  const modalGenres = document.getElementById('modalGenres');
  const modalCast = document.getElementById('modalCast');

  if (modalImage) modalImage.src = movie.image;
  if (modalTitle) modalTitle.textContent = movie.title;
  if (modalBadges) {
    modalBadges.innerHTML = [
      movie.isNew ? '<span class="badge badge-new">New</span>' : '',
      `<span class="badge badge-rating">${movie.rating}</span>`
    ].filter(Boolean).join('');
  }
  if (modalRating) modalRating.textContent = movie.rating;
  if (modalYear) modalYear.textContent = movie.year.toString();
  if (modalDuration) modalDuration.textContent = movie.duration;
  if (modalImdbRating) modalImdbRating.textContent = movie.imdbRating.toString();
  if (modalDescription) modalDescription.textContent = movie.description;
  if (modalDirector) modalDirector.textContent = movie.director;

  if (modalGenres) {
    modalGenres.innerHTML = movie.genre.map(genre =>
      `<span class="genre-tag">${genre}</span>`
    ).join('');
  }

  if (modalCast) {
    modalCast.innerHTML = movie.cast.map(actor => {
      const initials = actor.split(' ').map(n => n[0]).join('');
      return `
        <div class="cast-member">
          <div class="cast-avatar">${initials}</div>
          <div class="cast-name">${actor}</div>
        </div>
      `;
    }).join('');
  }

  // Populate details tab
  const detailsYear = document.getElementById('detailsYear');
  const detailsDuration = document.getElementById('detailsDuration');
  const detailsRating = document.getElementById('detailsRating');
  const detailsImdbRating = document.getElementById('detailsImdbRating');

  if (detailsYear) detailsYear.textContent = movie.year.toString();
  if (detailsDuration) detailsDuration.textContent = movie.duration;
  if (detailsRating) detailsRating.textContent = movie.rating;
  if (detailsImdbRating) detailsImdbRating.textContent = `${movie.imdbRating}/10`;

  // Show continue watching progress if applicable
  const progressContainer = document.getElementById('continueWatchingProgress');
  const progressPercent = document.getElementById('progressPercent');
  const progressFill = document.getElementById('progressFill') as HTMLElement;

  if (movie.watchProgress && progressContainer && progressPercent && progressFill) {
    progressContainer.style.display = 'block';
    progressPercent.textContent = `${movie.watchProgress}% complete`;
    progressFill.style.width = `${movie.watchProgress}%`;
  } else if (progressContainer) {
    progressContainer.style.display = 'none';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

const closeMovieModal = (event?: Event) => {
  if (event && event.target !== event.currentTarget) return;

  const modal = document.getElementById('movieModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

const switchTab = (event: Event, tabName: string) => {
  const button = event.target as HTMLButtonElement;

  // Remove active class from all tab buttons and contents
  for (const btn of document.querySelectorAll('.tab-btn')) {
    btn.classList.remove('active');
  }
  for (const content of document.querySelectorAll('.tab-content')) {
    content.classList.remove('active');
  }

  // Add active class to clicked button and corresponding content
  button.classList.add('active');
  const tabContent = document.getElementById(tabName);
  if (tabContent) {
    tabContent.classList.add('active');
  }
};

// Search Functions
const openSearchModal = () => {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchModalInput') as HTMLInputElement;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }
};

const closeSearchModal = (event?: Event) => {
  if (event && event.target !== event.currentTarget) return;

  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

const toggleFilters = () => {
  const filtersPanel = document.getElementById('searchFilters');
  if (filtersPanel) {
    filtersPanel.style.display = filtersPanel.style.display === 'none' ? 'block' : 'none';
  }
};

const performSearch = () => {
  const input = document.getElementById('searchModalInput') as HTMLInputElement;
  const genreFilter = document.getElementById('genreFilter') as HTMLSelectElement;
  const yearFilter = document.getElementById('yearFilter') as HTMLSelectElement;
  const ratingFilter = document.getElementById('ratingFilter') as HTMLSelectElement;
  const resultsContainer = document.getElementById('searchResults');

  if (!input || !resultsContainer) return;

  const query = input.value.trim();
  const filters = {
    genre: genreFilter?.value || undefined,
    year: yearFilter?.value ? Number.parseInt(yearFilter.value) : undefined,
    rating: ratingFilter?.value ? Number.parseFloat(ratingFilter.value) : undefined
  };

  if (query === '' && !filters.genre && !filters.year && !filters.rating) {
    resultsContainer.innerHTML = `
      <div class="search-placeholder">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <p>Start typing to search for movies and TV shows...</p>
      </div>
    `;
    return;
  }

  const results = searchAll(query, filters);

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="search-placeholder">
        <p>No movies or TV shows found matching your criteria.</p>
      </div>
    `;
  } else {
    const movieCount = results.filter(item => 'duration' in item).length;
    const tvCount = results.length - movieCount;
    const resultText = [
      movieCount > 0 ? `${movieCount} movie${movieCount !== 1 ? 's' : ''}` : '',
      tvCount > 0 ? `${tvCount} TV show${tvCount !== 1 ? 's' : ''}` : ''
    ].filter(Boolean).join(' and ');

    resultsContainer.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <p style="color: var(--text-secondary); font-size: 0.875rem;">
          Found ${resultText}
        </p>
      </div>
      <div class="search-results-grid">
        ${results.map(item => createSearchResultCard(item)).join('')}
      </div>
    `;
  }
};

// Initialize the application
const initializeApp = () => {
  // Render movie sections
  const continueWatching = getContinueWatching();
  const newReleases = getNewReleases();
  const trendingMovies = getMoviesByCategory('trending');
  const ninetiesMovies = getMoviesByCategory('90s');
  const awardWinners = getMoviesByCategory('awards');
  const documentaries = getMoviesByCategory('documentaries');
  const classicCinema = getMoviesByCategory('classic');
  const comedies = getMoviesByCategory('comedy');

  // Render TV show sections
  const tvShows = getTVShowsByCategory('tvshows');

  // Show/hide sections based on content
  if (continueWatching.length > 0) {
    const section = document.getElementById('continueWatching');
    if (section) {
      section.style.display = 'block';
      renderMovieSection('continueWatchingRow', continueWatching, true);
    }
  }

  if (newReleases.length > 0) {
    const section = document.getElementById('newReleases');
    if (section) {
      section.style.display = 'block';
      renderMovieSection('newReleasesRow', newReleases);
    }
  }

  renderMovieSection('trendingRow', trendingMovies);
  renderTVShowSection('tvShowsRow', tvShows);
  renderMovieSection('ninetiesRow', ninetiesMovies);
  renderMovieSection('awardsRow', awardWinners);
  renderMovieSection('documentariesRow', documentaries);
  renderMovieSection('classicRow', classicCinema);
  renderMovieSection('comedyRow', comedies);

  // Event listeners
  const searchInput = document.getElementById('searchInput');
  const searchModalInput = document.getElementById('searchModalInput');
  const genreFilter = document.getElementById('genreFilter');
  const yearFilter = document.getElementById('yearFilter');
  const ratingFilter = document.getElementById('ratingFilter');

  if (searchInput) {
    searchInput.addEventListener('click', openSearchModal);
    searchInput.addEventListener('focus', openSearchModal);
  }

  if (searchModalInput) {
    searchModalInput.addEventListener('input', performSearch);
  }

  if (genreFilter) {
    genreFilter.addEventListener('change', performSearch);
  }

  if (yearFilter) {
    yearFilter.addEventListener('change', performSearch);
  }

  if (ratingFilter) {
    ratingFilter.addEventListener('change', performSearch);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMovieModal();
      closeSearchModal();
    }
  });

  // Smooth scrolling for movie rows
  for (const row of document.querySelectorAll('.movie-row')) {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    row.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = (e as MouseEvent).pageX - row.getBoundingClientRect().left;
      scrollLeft = row.scrollLeft;
    });

    row.addEventListener('mouseleave', () => {
      isDown = false;
    });

    row.addEventListener('mouseup', () => {
      isDown = false;
    });

    row.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = (e as MouseEvent).pageX - row.getBoundingClientRect().left;
      const walk = (x - startX) * 2;
      row.scrollLeft = scrollLeft - walk;
    });
  }

  console.log('Blackbuster initialized successfully!');
};

// Make functions globally available
declare global {
  interface Window {
    openMovieModal: (movieId: number) => void;
    openTVShowModal: (showId: number) => void;
    closeMovieModal: (event?: Event) => void;
    switchTab: (event: Event, tabName: string) => void;
    openSearchModal: () => void;
    closeSearchModal: (event?: Event) => void;
    toggleFilters: () => void;
  }
}

window.openMovieModal = openMovieModal;
window.openTVShowModal = openTVShowModal;
window.closeMovieModal = closeMovieModal;
window.switchTab = switchTab;
window.openSearchModal = openSearchModal;
window.closeSearchModal = closeSearchModal;
window.toggleFilters = toggleFilters;

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}
