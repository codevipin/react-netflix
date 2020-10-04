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
  const heightLandscape: number = 230;
  const widthLandscape: number = 320;
  const heightPortrait: number = 370;
  const widthPortrait: number = 230;
  useEffect(() => {
    //TODO check if we can use useRef
    const element: HTMLCollection = document.getElementsByClassName(
      `locate-card-id-${elementId}`
    );
    const data = element[0].getBoundingClientRect();
    const updateTopDistanceFromTargetCenter = (targetTopCenter: number) => {
      let topPosition = targetTopCenter;
      if (isImagePortrait) {
        topPosition = targetTopCenter - heightPortrait / 2;
      } else {
        topPosition = targetTopCenter - heightLandscape / 2;
      }
      return topPosition;
    };
    const updateLeftDistanceFromTargetCenter = (targetLeftCenter: number) => {
      let leftPosition = targetLeftCenter;
      if (isImagePortrait) {
        if (targetLeftCenter - widthPortrait / 2 > 0) {
          leftPosition = targetLeftCenter - widthPortrait / 2;
        } else {
          leftPosition = data.left;
        }

        if (window.innerWidth < data.width + data.left) {
          leftPosition = window.innerWidth - widthPortrait;
        }
      } else {
        if (targetLeftCenter - widthLandscape / 2 > 0) {
          leftPosition = targetLeftCenter - widthLandscape / 2;
        } else {
          leftPosition = data.left;
        }

        if (window.innerWidth < data.width + data.left) {
          leftPosition = window.innerWidth - widthLandscape;
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
