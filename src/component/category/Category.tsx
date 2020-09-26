import React, { Component } from "react";
import ContentList from "../content-list/ContentList";

export class Category extends Component {
  categories = [1, 2, 3, 4, 5];
  render() {
    return (
      <div>
        {this.categories.map((_, index) => (
          <ContentList
            key={index}
            title={"Category - " + index}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          />
        ))}
      </div>
    );
  }
}

export default Category;
