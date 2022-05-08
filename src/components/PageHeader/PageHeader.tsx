import React, { ChangeEvent } from 'react';
import { useSetState } from '../../store';
import { Link } from 'react-router-dom';
import './PageHeader.scss';


const PageHeader = React.memo(() => {
  const setGlobalState = useSetState();

  const handleOrder = (event: ChangeEvent<HTMLSelectElement>) => {
    setGlobalState(prev => ({
      ...prev,
      orderBy: event.target.value,
    }))
  };
  
  return (
    <div className="page-header">
      <h1 className="page-header__title">Top stories</h1>
      <div className="page-header__tools">
        <Link to="/bookmarks" className="page-header__link">
          <span className="page-header__icon"></span>
          <span>View bookmark</span>
        </Link>
        <div className="page-header__select">
          <select name="order" onChange={ handleOrder }>
            <option className="page-header__option" value="newest">Newest first</option>
            <option className="page-header__option" value="oldest">Oldest first</option>
          </select>
        </div>
      </div>
    </div>
  );
});

export default PageHeader;
