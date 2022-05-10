import React, { ChangeEvent } from 'react';
import { useTrackedState, useUpdate } from '../../store/globalStore';
import { Link, useLocation } from 'react-router-dom';
import './PageHeader.scss';

interface PageHeaderModel {
  title: string;
}

export const PageHeader = (props:PageHeaderModel) => {
  const setGlobalState = useUpdate();
  const { orderBy } = useTrackedState();
  const url = useLocation().pathname;

  const handleChange = (evt:ChangeEvent<HTMLSelectElement>) => {
    setGlobalState(state => ({
      ...state,
      orderBy: evt.target.value,
      isLoading: true,
    }));
  };

  return (
    <div className="page-header">
      <h1 className="page-header__title">{props.title}</h1>
      <div className="page-header__tools">
        {url === "/all-bookmarks"
          ? ''
          : <Link to="/all-bookmarks" className="page-header__link">
              <span className="page-header__icon"></span>
              <span>View bookmark</span>
            </Link>
        }
        <div className="page-header__select-wrapper">
          <select name="order" onChange={handleChange} value={orderBy} className="page-header__select">
            <option className="page-header__option" value="newest" key="newest">Newest first</option>
            <option className="page-header__option" value="oldest" key="oldest">Oldest first</option>
          </select>
          <span className="page-header__select-icon"></span>
        </div>
      </div>
    </div>
  );
};
