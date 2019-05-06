import React from 'react';

import styles from './search-panel.module.css';

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
    <div className={styles.searchBlock}>
      <div className={styles.search}>
        <input className={styles.input} type="text" placeholder="Search" onChange={handleChangeSearchFilter} value={searchFilter} />
        <button className={styles.smallBtn} onClick={reset}>
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
}