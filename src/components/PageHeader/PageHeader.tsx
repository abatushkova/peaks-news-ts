import React from "react";
import { Link } from 'react-router-dom';
import './PageHeader.scss';

const PageHeader = () => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">Top stories</h1>
      <div className="page-header__tools">
        <Link to="/bookmarks" className="page-header__link">
          <span className="page-header__icon"></span>
          <span>View bookmark</span>
        </Link>
        <div className="page-header__select">
          <select name="sorting">
            <option className="page-header__option" defaultValue="Newest first">Newest first</option>
            <option className="page-header__option" value="Oldest first">Oldest first</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
