import { Genre } from "../models/category.model";

export const CategoryData = {
  [Genre.ORIGINAL]: {
    title: "Netflix Original",
    subUrl: "/discover/tv",
  },
  [Genre.TRENDING]: {
    title: "Trending Now",
    subUrl: "/trending/all/week",
  },
  [Genre.TOP_RATED]: {
    title: "Top Rated",
    subUrl: "/movie/top_rated",
  },
  [Genre.ACTION]: {
    title: "Action Movies",
    subUrl: "/discover/movie",
    extraData: {
      genreCode: 28,
    },
  },
  [Genre.COMEDY]: {
    title: "Comedy Movies",
    subUrl: "/discover/movie",
    extraData: {
      genreCode: 35,
    },
  },
  [Genre.HORROR]: {
    title: "Horror Movies",
    subUrl: "/discover/movie",
    extraData: {
      genreCode: 27,
    },
  },
  [Genre.DOCUMENTRY]: {
    title: "Documentaries",
    subUrl: "/discover/movie",
    extraData: {
      genreCode: 99,
    },
  },
};
