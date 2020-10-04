import React, { useEffect, useState } from "react";
import { IContent } from "../../models/content-list.model";
import "./MovieHoverCard.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
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
    const element: HTMLCollection = document.getElementsByClassName(
      `locate-card-id-${elementId}`
    );
    const data = element[0].getBoundingClientRect();
    const updateTopDistanceFromTargetCenter = (targetTopCenter: number) => {
      let topPosition = targetTopCenter;
      if (isImagePortrait) {
        topPosition = targetTopCenter - 185;
      } else {
        topPosition = targetTopCenter - 75;
      }
      return topPosition;
    };
    const updateLeftDistanceFromTargetCenter = (targetLeftCenter: number) => {
      let leftPosition = targetLeftCenter;
      if (isImagePortrait) {
        if (targetLeftCenter - 115 > 0) {
          leftPosition = targetLeftCenter - 115;
        } else {
          leftPosition = data.left;
        }

        if (window.innerWidth < data.width + data.left) {
          leftPosition = window.innerWidth - 200;
        }
      } else {
        if (targetLeftCenter - 160 > 0) {
          leftPosition = targetLeftCenter - 160;
        } else {
          leftPosition = data.left;
        }

        if (window.innerWidth < data.width + data.left) {
          leftPosition = window.innerWidth - 320;
        }
      }
      console.log("leftPosition", leftPosition);
      return leftPosition;
    };
    console.log("data", data);
    setLeftDistance(
      updateLeftDistanceFromTargetCenter(data.left + data.width / 2)
    );
    setTopDistance(
      updateTopDistanceFromTargetCenter(
        window.scrollY + data.top + data.height / 2
      )
    );
  }, [elementId, isImagePortrait]);
  return (
    <div
      className={`movie-hover-card ${
        isImagePortrait ? "portrait" : "landscape"
      }`}
      style={{
        top: topDistance,
        left: leftDistance,
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
        <PlayArrowIcon fontSize="small" />
        <AddIcon fontSize="small" />
        <ThumbUpIcon fontSize="small" />
        <ThumbDownIcon fontSize="small" />
      </div>
    </div>
  );
}

export default MovieHoverCard;
