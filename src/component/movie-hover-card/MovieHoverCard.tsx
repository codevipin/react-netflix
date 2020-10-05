import React, { useEffect, useState } from "react";
import { IContent } from "../../models/content-list.model";
import "./MovieHoverCard.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import {
  dimensions,
  heightLandscape,
  heightPortrait,
  widthLandscape,
  widthPortrait,
} from "../../common/utils/hover-card-position";
interface IHoverCardProps {
  content: IContent;
  isImagePortrait: boolean;
  elementId: string;
}
function MovieHoverCard({
  content,
  isImagePortrait,
  elementId,
}: IHoverCardProps) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  const [leftDistance, setLeftDistance] = useState(0);
  const [topDistance, setTopDistance] = useState(0);

  useEffect(() => {
    //TODO check if we can use useRef
    const element: HTMLCollection = document.getElementsByClassName(
      `locate-card-id-${elementId}`
    );
    const [fromLeft, fromTop] = dimensions(element[0], isImagePortrait);
    setLeftDistance(fromLeft);
    setTopDistance(fromTop);
  }, [elementId, isImagePortrait]);
  return (
    <div
      className={`movie-hover-card ${
        isImagePortrait ? "portrait" : "landscape"
      }`}
      style={{
        top: topDistance,
        left: leftDistance,
        height: isImagePortrait ? heightPortrait : heightLandscape,
        width: isImagePortrait ? widthPortrait : widthLandscape,
      }}
    >
      <div className="position-relative">
        <img
          height={isImagePortrait ? heightPortrait - 70 : heightLandscape - 80}
          width={isImagePortrait ? widthPortrait : widthLandscape}
          src={
            baseImageUrl +
            (isImagePortrait ? content.poster_path : content.backdrop_path)
          }
          alt={content.name}
        />
        <div className="fade-bottom position-absolute bottom-0"></div>
        <div className="content-title position-absolute bottom-0">
          <h3>{content.name || content.title}</h3>
        </div>
      </div>
      <div className="actions flex">
        <PlayArrowIcon fontSize="small" />
        <AddIcon fontSize="small" />
        <ThumbUpIcon fontSize="small" />
        <ThumbDownIcon fontSize="small" />
      </div>
    </div>
  );
}

export default MovieHoverCard;
