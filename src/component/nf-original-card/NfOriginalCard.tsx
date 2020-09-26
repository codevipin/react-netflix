import React from "react";
import { IContent } from "../../models/content-list.model";
import "./NfOriginalCard.scss";

function NfOriginalCard(props: { content: IContent }) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="nf-original-card">
      <div className="image-container">
        <img src={baseImageUrl + props.content.poster_path} alt="lucifer" />
      </div>
    </div>
  );
}

export default NfOriginalCard;
