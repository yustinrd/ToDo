import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  render() {

    return (
      <div className="search-block">
        <div className="search-block__search search">
          <input className="search__input" type="text" placeholder="Search" />
          <button className="search__small-btn small-btn--close">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  };
}