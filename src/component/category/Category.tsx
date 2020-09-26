import React, { Component } from "react";
import ContentList from "../content-list/ContentList";
import { CategoryData } from "../../constants/category.constant";
import { Genre } from "../../models/category.model";
export class Category extends Component {
  render() {
    return (
      <div>
        <ContentList
          title={CategoryData[Genre.ORIGINAL].title}
          url={CategoryData[Genre.ORIGINAL].subUrl}
        />
        <ContentList
          title={CategoryData[Genre.TRENDING].title}
          url={CategoryData[Genre.TRENDING].subUrl}
        />
        <ContentList
          title={CategoryData[Genre.TOP_RATED].title}
          url={CategoryData[Genre.TOP_RATED].subUrl}
        />
        <ContentList
          title={CategoryData[Genre.ACTION].title}
          url={CategoryData[Genre.ACTION].subUrl}
          extraData={{
            with_generes: CategoryData[Genre.ACTION].extraData.genreCode,
          }}
        />
        <ContentList
          title={CategoryData[Genre.COMEDY].title}
          url={CategoryData[Genre.COMEDY].subUrl}
          extraData={{
            with_generes: CategoryData[Genre.COMEDY].extraData.genreCode,
          }}
        />
        <ContentList
          title={CategoryData[Genre.HORROR].title}
          url={CategoryData[Genre.HORROR].subUrl}
          extraData={{
            with_generes: CategoryData[Genre.HORROR].extraData.genreCode,
          }}
        />
        <ContentList
          title={CategoryData[Genre.DOCUMENTRY].title}
          url={CategoryData[Genre.DOCUMENTRY].subUrl}
          extraData={{
            with_generes: CategoryData[Genre.DOCUMENTRY].extraData.genreCode,
          }}
        />
      </div>
    );
  }
}

export default Category;
