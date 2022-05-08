import axios from 'axios';

const apiKey = '425062e9-cd91-4b2f-a513-04b355f37184';
const pageSize = 15;

let baseUrl = `https://content.guardianapis.com/search?show-fields=headline,body,thumbnail&page-size=${pageSize}&api-key=${apiKey}`;

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
  id: string;
  fields: ArticleFieldsEntity;
}

export const getArticle = async (sectionID:string, orderBy:string):Promise<ArticleEntity[]> => {
  baseUrl = `${baseUrl}&section=${sectionID}&order-by=${orderBy}`;

  try {
    const response = await axios.get<SearchResponseEntity>(baseUrl);

    return response.data.response.results;
  } catch (err) {
    console.error(err);
    return [];
  }
}
