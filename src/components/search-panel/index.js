import React from 'react';

import './search-panel.css';

export default function SearchPanel(props) {

  let searchFilter = props.searchFilter;

  const handleChangeSearchFilter = (event) => {
    searchFilter = event.target.value;
    props.onChangeSearchFilter(searchFilter);
  };

  const reset = () => {
    searchFilter = '';
    props.onChangeSearchFilter(searchFilter);
  };

  return (
    <div className="search-block">
      <div className="search-block__search search">
        <input className="search__input" type="text" placeholder="Search" onChange={handleChangeSearchFilter} value={searchFilter} />
        <button className="search__small-btn small-btn--close" onClick={reset}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}