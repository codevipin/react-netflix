import React, { Component } from "react";
import "./ContentList.scss";
import NfOriginalCard from "../nf-original-card/NfOriginalCard";
import IContentListProps, {
  IContentData,
} from "../../models/content-list.model";
import { contentService } from "../../services/content.service";
import { CategoryData } from "../../constants/category.constant";
import { Genre } from "../../models/category.model";
export class ContentList extends Component<IContentListProps, IContentData> {
  constructor(props: IContentListProps) {
    super(props);
    this.state = {
      results: [],
      total_results: 0,
    };
  }
  componentDidMount() {
    const onSuccess = (response: IContentData) => {
      console.log("response", response);
      this.setState(response);
    };
    const onError = () => {
      console.log("error occured while fetch data for ", this.props.url);
    };
    contentService
      .fetchContent(this.props.url, this.props.extraData)
      .then(onSuccess, onError);
  }
  render() {
    return (
      <div className="content-list">
        <h2 className="content-title color-white margin-0">
          {this.props.title}
        </h2>
        <div className="content-items flex">
          {this.state.results.map((content) => (
            <NfOriginalCard
              key={content.id}
              content={content}
              isImagePortrait={
                this.props.title === CategoryData[Genre.ORIGINAL].title
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContentList;
