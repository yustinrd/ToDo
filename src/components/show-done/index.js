import React from 'react';

import styles from './show-done.module.css';

export default function ShowDone(props) {

  return (
    <div className={styles.showDone}>
      <input className={styles.doneCheckbox} id="done-checkbox" type="checkbox" onChange={() => props.toggleShowDone(props.showDone)} checked={props.showDone}/>
      <label htmlFor="done-checkbox">Show done</label>
    </div>
  );
}