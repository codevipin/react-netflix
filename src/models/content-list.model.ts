export default interface IContentListProps {
  children?: React.ReactNode;
  title: string;
  url: string;
  extraData?: {};
}

export interface IContent {
  id: number;
  original_name: string;
  name: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  title?: string;
}

export interface IContentData {
  total_results: number;
  results: IContent[];
}
