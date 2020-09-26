import React from "react";
import "./ContentList.scss";
import NfOriginalCard from "../nf-original-card/NfOriginalCard";
import IContentListProps from "./content-list.model";
function ContentList(props: IContentListProps) {
  return (
    <div className="content-list">
      <h2 className="content-title color-white margin-0">{props.title}</h2>
      <div className="content-items flex">
        {props.data.map((_, index) => (
          <NfOriginalCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default ContentList;
