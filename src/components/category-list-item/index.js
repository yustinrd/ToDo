import React from 'react';

import './category-list-item.css';

export default function CategoryListItem (props) {
  return (
    <li className={`category-list__item ${props.isInnerItem ? 'inner-list__item' : ''}`}>
      <div className="category-list__left-side">
        <span className="category-list__item-name" style={props.isSelected ? {fontWeight: 'bold'} : {}} onClick={() => props.onChangeCategory(props.itemId)}>{props.name}</span>
        <button className="category-list__small-btn small-btn small-btn--edit" onClick={() => props.showEditCategoryModal(props.itemId)}><i className="fas fa-edit"/>
        </button>
      </div>
      <div className="category-list__right-side">
        <button className="category-list__small-btn small-btn small-btn--delete" onClick={() => props.onDeleteCategory(props.itemId)}><i className="fas fa-trash"/>
        </button>
        {!props.isInnerItem ?
          <button className="category-list__small-btn small-btn small-btn--add-inner" onClick={() => props.showAddCategoryModal(props.itemId)}><i className="fas fa-plus"/></button>
          :
          null
        }
      </div>
    </li>
  );
}