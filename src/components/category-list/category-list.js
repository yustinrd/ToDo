import React, { Component } from 'react';

import CategoryListItem from '../category-list-item';

import './category-list.css';

export default class CategoryList extends Component {

  render() {

    const CategoryList = this.props.categories.map((item) => {
      const isSelected = this.props.selectedCategoryId === item.id;
      return <CategoryListItem
                key={item.id}
                isInnerItem={'parentId' in item}
                name={item.name}
                isSelected={isSelected}
                onChangeCategory={this.props.onChangeCategory}
                itemId={item.id}
                onDeleteCategory={this.props.onDeleteCategory}
             />
    });

    return (
      <ul className="category-list">
        {CategoryList}
      </ul>
    );
  };
}