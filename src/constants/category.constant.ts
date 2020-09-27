import { Genre } from "../models/category.model";

export const CategoryData = {
  [Genre.ORIGINAL]: {
    title: "Netflix Original",
    subUrl: "/discover/tv",
  },
  [Genre.TRENDING]: {
    title: "Trending Now",
    subUrl: "/trending/all/week",
    extraData: {
      language: "en-US",
    },
  },
  [Genre.TOP_RATED]: {
    title: "Top Rated",
    subUrl: "/movie/top_rated",
  },
  [Genre.ACTION]: {
    title: "Action Movies",
    subUrl: "/discover/movie",
    extraData: {
      with_generes: 28,
    },
  },
  [Genre.COMEDY]: {
    title: "Comedy Movies",
    subUrl: "/discover/movie",
    extraData: {
      with_generes: 35,
    },
  },
  [Genre.HORROR]: {
    title: "Horror Movies",
    subUrl: "/discover/movie",
    extraData: {
      with_generes: 27,
    },
  },
  [Genre.DOCUMENTRY]: {
    title: "Documentaries",
    subUrl: "/discover/movie",
    extraData: {
      with_generes: 99,
    },
  },
};
