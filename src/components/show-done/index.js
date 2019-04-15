import React from 'react';

import './show-done.css';

export default function ShowDone(props) {

  return (
    <div className="show-done">
      <input className="show-done__done-checkbox" id="done-checkbox" type="checkbox" onChange={() => props.toggleShowDone(props.showDone)} checked={props.showDone}/>
      <label htmlFor="done-checkbox">Show done</label>
    </div>
  );
}