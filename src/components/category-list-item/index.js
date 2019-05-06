import React from 'react';

import classNames from 'classnames';
import styles from './category-list-item.module.css';

export default function CategoryListItem (props) {
  return (
    <li className={classNames(styles.item, {[styles.innerListItem]: props.isInnerItem})}>
      <div>
        <span className={styles.itemName} style={props.isSelected ? {fontWeight: 'bold'} : {}} onClick={() => props.onChangeCategory(props.itemId)}>{props.name}</span>
        <button className='small-btn' onClick={() => props.showEditCategoryModal(props.itemId)}><i className="fas fa-edit"/>
        </button>
      </div>
      <div>
        <button className="small-btn" onClick={() => props.onDeleteCategory(props.itemId)}><i className="fas fa-trash"/>
        </button>
        {!props.isInnerItem ?
          <button className="small-btn" onClick={() => props.showAddCategoryModal(props.itemId)}><i className="fas fa-plus"/></button>
          :
          null
        }
      </div>
    </li>
  );
}