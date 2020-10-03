import React from "react";
import { IContent } from "../../models/content-list.model";
import "./MovieHoverCard.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
interface IHoverCardProps {
  content: IContent;
  mouseEventData: MouseEvent | null;
  isImagePortrait: boolean;
}
function MovieHoverCard({
  content,
  mouseEventData,
  isImagePortrait,
}: IHoverCardProps) {
  console.log("content.original_name", content, mouseEventData);
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      className={`movie-hover-card ${
        isImagePortrait ? "portrait" : "landscape"
      }`}
      style={{
        top: window.scrollY + Number(mouseEventData?.clientY) - 100,
        left: Number(mouseEventData?.clientX) - 100,
      }}
    >
      <div className="position-relative">
        <img
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
        <PlayArrowIcon />
        <AddIcon />
        <ThumbUpIcon />
        <ThumbDownIcon />
      </div>
      {/* MovieHoverCard Comopent - {content.name || content.title}
      position - {mouseEventData?.clientX} */}
    </div>
  );
}

export default MovieHoverCard;
