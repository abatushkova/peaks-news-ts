import React from 'react';
import Button from '../Button/Button';
import './Article.scss';

const Article = () => {
  return (
    <main className="layout">
      <Button />
      <article className="doc">
        <time className="doc__date"></time>
        <h1 className="doc__title">Global report: WHO warns of accelerating Covid-19 infections in Africa</h1>
        <h2 className="doc__subtitle">Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over catching Covid-19 at rallies; Brazil confirms 30,000 new cases</h2>
        <figure className="doc__picture">
          <picture>
            <img src="" alt="" className="doc__img-item" />
          </picture>
          <figcaption className="doc__image-desc"></figcaption>
        </figure>
        <div className="doc__text"></div>
      </article>
    </main>
  );
};

export default Article;
