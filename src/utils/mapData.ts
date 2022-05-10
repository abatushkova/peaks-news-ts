import { ArticleEntity } from "../services/dataProvider";
import { CardModel } from "../components/Card/Card";

export const mapData = (articles:ArticleEntity[] | undefined) => {
  return articles?.map(article => ({
    title: article.webTitle,
    headline: article.fields.headline,
    body: article.fields.body.slice(0, 120).replace(/(<([^>]+)>)/ig, '').concat('...'),
    thumbnail: article.fields.thumbnail,
    cardId: article.id,
    size: '',
    isTextOnly: false,
    isTitleOnly: false,
    category: article.sectionId,
    date: article.webPublicationDate,
  })) as CardModel[];
};
