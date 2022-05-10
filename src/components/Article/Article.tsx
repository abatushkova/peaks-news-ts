import React from 'react';
import { Button } from '../Button/Button';
import './Article.scss';

export const Article = () => {
  return (
    <main className="layout">
      <Button />
      <article className="doc">
        <time className="doc__date">date and time</time>
        <h1 className="doc__title">Title</h1>
        <h2 className="doc__subtitle">Subtitle</h2>
        <figure className="doc__picture">
          <picture>
            <img src="" alt="" className="doc__img-item" />
          </picture>
          <figcaption className="doc__image-desc"></figcaption>
        </figure>
        <div className="doc__text">Text</div>
      </article>
    </main>
  );
};
