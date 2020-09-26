import React from "react";
import "./ContentList.scss";
import NfOriginalCard from "../nf-original-card/NfOriginalCard";
function ContentList() {
  return (
    <div className="content-list">
      <h2 className="content-title color-white margin-0">NETFLIX ORIGINALS</h2>
      <div className="content-items flex">
        {[1, 2, 3, 4, 5, 6].map((_) => (
          <NfOriginalCard />
        ))}
      </div>
    </div>
  );
}

export default ContentList;
