import React, { Component } from 'react';

import './category-list-item.css';

export default class CategoryListItem extends Component {

  render() {

    return (
      <li className={`category-list__item ${this.props.isInnerItem ? 'inner-list__item' : ''}`}>
        <div className="category-list__left-side">
          <span className="category-list__item-name" style={this.props.isSelected ? {fontWeight: 'bold'} : {}} onClick={() => this.props.onChangeCategory(this.props.itemId)}>{this.props.name}</span>
          <button className="category-list__small-btn small-btn small-btn--edit"><i className="fas fa-edit"></i>
          </button>
        </div>
        <div className="category-list__right-side">
          <button className="category-list__small-btn small-btn small-btn--delete" onClick={() => this.props.onDeleteCategory(this.props.itemId)}><i className="fas fa-trash"></i>
          </button>
          <button className="category-list__small-btn small-btn small-btn--add-inner"><i className="fas fa-plus"></i>
          </button>
        </div>
      </li>
    );
  };
}