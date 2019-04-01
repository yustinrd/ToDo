import React, { Component } from 'react';

import AddPanel from '../add-panel';
import CategoryList from '../category-list';
import Service from "../../service";

import './category-block.css';

export default class CategoryBlock extends Component {

  Service = new Service();

  state = {
    categories: []
  };

  componentDidMount() {
    this.updateCategories();
  }

  updateCategories = () => {
    this.Service
      .getAllCategories()
      .then((data) => {
        if (data.length > 0 && this.props.selectedCategoryId === null)
          this.props.onChangeCategory(data[0].id)

        this.setState({
          categories: data
        });
      })
      .catch(this.onError);
  };

  onDeleteCategory = (id) => {
    this.Service
      .deleteCategory(id)
      .then(() => {
        this.updateCategories();
      })
      .catch(this.onError);
    if (this.props.selectedCategoryId === id) this.props.onChangeCategory(null)
  };

  onAddCategory = (categoryName) => {
    this.Service
      .addCategory({name: categoryName})
      .then(() => {
        this.updateCategories();
      })
      .catch(this.onError);
  };

  onError = (err) => {
    this.setState({
      categories: []
    });
    console.log(err);
  };

  render() {

    return (
      <div className="category-block">
        <AddPanel onAdd={this.onAddCategory}/>
        <CategoryList selectedCategoryId={this.props.selectedCategoryId} onChangeCategory={this.props.onChangeCategory} onDeleteCategory={this.onDeleteCategory} categories={this.state.categories}/>
      </div>
    );
  };
}