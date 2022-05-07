import axios from 'axios';

const apiKey = '425062e9-cd91-4b2f-a513-04b355f37184';
const pageSize = 200;
const baseSection = 'news';
const categorySection = 'sport|culture|lifeandstyle';

const baseUrl = `https://content.guardianapis.com/search?section=${baseSection}&show-fields=headline,body,thumbnail&page-size=${pageSize}&api-key=${apiKey}`;

const categoryUrl = `https://content.guardianapis.com/search?section=${categorySection}&show-fields=headline,body,thumbnail&page-size=${pageSize}&api-key=${apiKey}`;

interface SearchResponseEntity {
  response: SearchResultEntity;
}

interface SearchResultEntity {
  results: Array<ArticleEntity>;
}

interface ArticleFieldsEntity {
  headline: string;
  body: string;
  thumbnail: string;
}

export interface ArticleEntity {
  webTitle: string;
  sectionName: string;
  fields: ArticleFieldsEntity;
}

export const getData = async ():Promise<ArticleEntity[]> => {
  try {
    const response = await axios.get<SearchResponseEntity>(baseUrl);

    return response.data.response.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
