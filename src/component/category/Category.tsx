import React from "react";
import ContentList from "../content-list/ContentList";
import { CategoryData } from "../../constants/category.constant";
import { Genre } from "../../models/category.model";
export const Category = () => {
  return (
    <div>
      <ContentList
        title={CategoryData[Genre.ORIGINAL].title}
        url={CategoryData[Genre.ORIGINAL].subUrl}
      />
      <ContentList
        title={CategoryData[Genre.TRENDING].title}
        url={CategoryData[Genre.TRENDING].subUrl}
        extraData={CategoryData[Genre.TRENDING].extraData}
      />
      <ContentList
        title={CategoryData[Genre.TOP_RATED].title}
        url={CategoryData[Genre.TOP_RATED].subUrl}
      />
      <ContentList
        title={CategoryData[Genre.ACTION].title}
        url={CategoryData[Genre.ACTION].subUrl}
        extraData={CategoryData[Genre.ACTION].extraData}
      />
      <ContentList
        title={CategoryData[Genre.COMEDY].title}
        url={CategoryData[Genre.COMEDY].subUrl}
        extraData={CategoryData[Genre.COMEDY].extraData}
      />
      <ContentList
        title={CategoryData[Genre.HORROR].title}
        url={CategoryData[Genre.HORROR].subUrl}
        extraData={CategoryData[Genre.HORROR].extraData}
      />
      <ContentList
        title={CategoryData[Genre.DOCUMENTRY].title}
        url={CategoryData[Genre.DOCUMENTRY].subUrl}
        extraData={CategoryData[Genre.DOCUMENTRY].extraData}
      />
    </div>
  );
};

export default Category;
