import React from "react";
import { IContent } from "../../models/content-list.model";
import "./NfOriginalCard.scss";

function NfOriginalCard(props: {
  content: IContent;
  isImagePortrait: boolean;
}) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="nf-original-card">
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
    </div>
  );
}

export default NfOriginalCard;
