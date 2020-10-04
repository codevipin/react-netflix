import React, { useState } from "react";
import { IContent } from "../../models/content-list.model";
import "./NfOriginalCard.scss";
import Modal from "../../common/components/modal/Modal";
import MovieHoverCard from "../movie-hover-card/MovieHoverCard";
import shortid from "shortid";

function NfOriginalCard(props: {
  content: IContent;
  isImagePortrait: boolean;
}) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  const [isHover, setHoverState] = useState(false);

  const uniqueElementId = shortid.generate();

  const mouseEnterHandler = () => {
    setHoverState(true);
  };

  const mouseLeaveHandler = () => {
    setHoverState(false);
  };

  return (
    <div
      className={`nf-original-card locate-card-id-${uniqueElementId}`}
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
          isImagePortrait={props.isImagePortrait}
          elementId={uniqueElementId}
        />
      </Modal>
    </div>
  );
}

export default NfOriginalCard;
