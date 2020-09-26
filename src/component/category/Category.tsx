import React, { Component } from "react";
import ContentList from "../content-list/ContentList";

export class Category extends Component {
  categories = [1, 2, 3, 4, 5];
  render() {
    return (
      <div>
        {this.categories.map((_) => (
          <ContentList />
        ))}
      </div>
    );
  }
}

export default Category;
