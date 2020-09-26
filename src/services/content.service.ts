import { IContentData } from "../models/content-list.model";

export const BASE_URL = "https://api.themoviedb.org/3";

export class ContentService {
  private API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
  fetchContent(url: string, params?: {}): Promise<IContentData> {
    const fetchUrl = `${BASE_URL}${url}?api_key=${
      this.API_KEY
    }${this.converObjectToQueryParams(params)}`;
    return fetch(fetchUrl).then((res) => res.json());
  }

  private converObjectToQueryParams(params: any) {
    let queryParam = "";
    for (let param in params) {
      queryParam += `&${param}=${params[param]}`;
    }
    return queryParam;
  }
}

export const contentService = new ContentService();
