import React, { useEffect, useState } from "react";
import "./ContentList.scss";
import NfOriginalCard from "../nf-original-card/NfOriginalCard";
import IContentListProps, { IContent } from "../../models/content-list.model";
import { contentService } from "../../services/content.service";
import { CategoryData } from "../../constants/category.constant";
import { Genre } from "../../models/category.model";

function ContentList(props: IContentListProps) {
  const [movies, setMovies]: [IContent[], Function] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await contentService.fetchContent(
        props.url,
        props.extraData
      );
      setMovies(data.results);
      return data;
    }
    fetchData();
  }, [props]);
  return (
    <div className="content-list">
      <h2 className="content-title color-white margin-0">{props.title}</h2>
      <div className="content-items flex">
        {movies.filter(item => !!item.backdrop_path).map((movie) => (
          <NfOriginalCard
            key={movie.id}
            content={movie}
            isImagePortrait={props.title === CategoryData[Genre.ORIGINAL].title}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentList;
