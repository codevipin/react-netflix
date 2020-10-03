import React, { useState } from "react";
import { IContent } from "../../models/content-list.model";
import "./NfOriginalCard.scss";
import Modal from "../../common/components/modal/Modal";
import MovieHoverCard from "../movie-hover-card/MovieHoverCard";

function NfOriginalCard(props: {
  content: IContent;
  isImagePortrait: boolean;
}) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  const [isHover, setHoverState] = useState(false);
  const [hoverCardEvent, setHoverCardData] = useState<MouseEvent | null>(null);

  const mouseEnterHandler = (event: React.MouseEvent) => {
    console.log("content", event.nativeEvent.clientX);
    setHoverState(true);
    setHoverCardData(event.nativeEvent);
  };

  const mouseLeaveHandler = (e: any) => {
    console.log("content", e.nativeEvent.clientX);
    setHoverState(false);
  };

  return (
    <div
      className="nf-original-card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="image-container">
        <img
          className={props.isImagePortrait ? "portrait" : "landscape"}
          src={
            baseImageUrl +
            (props.isImagePortrait
              ? props.content.poster_path
              : props.content.backdrop_path)
          }
          alt={props.content.original_name}
        />
      </div>
      <Modal canShow={isHover}>
        <MovieHoverCard
          content={props.content}
          mouseEventData={hoverCardEvent}
          isImagePortrait={props.isImagePortrait}
        />
      </Modal>
    </div>
  );
}

export default NfOriginalCard;
