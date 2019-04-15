import React, { Component } from 'react';

import './modal.css';

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    'text' in this.props.modal.object ? this.refs.name.value = this.props.modal.object.text : this.refs.name.value = this.props.modal.object.name;
    if ('done' in this.props.modal.object)
      this.refs.isDone.checked = this.props.modal.object.done;
    if (this.props.modal.categoriesVisible && this.props.categories.length > 0)
      this.refs.category.value = this.props.modal.object.categoryId;
  }

  handleSubmit(event) {
    event.preventDefault();

    let object = this.props.modal.object;
    'text' in object ? object.text = this.refs.name.value : object.name = this.refs.name.value;
    if ('category' in this.refs)
      object.categoryId = parseInt(this.refs.category.value);
    if ('isDone' in this.refs)
      object.done = this.refs.isDone.checked;


    this.props.onClickSaveBtn(this.props.modal.actionType, object);
    this.props.hideModal();
  }

  render() {
    const categoryOptions = this.props.categories.map(category =>
      <option key={category.id} className="modal__selection-item" value={category.id}>
        {category.name}
      </option>
    );

    return (
      <div className={`modal ${this.props.modal.actionType === '' ? 'hidden' : ''}`}>
        <form className="modal__window" onSubmit={this.handleSubmit}>

          <button className="modal__small-btn small-btn small-btn--close" type="button" onClick={this.props.hideModal}>
            <i className="fas fa-times"/>
          </button>

          <input className="modal__name" type="text" ref="name"/>

          {this.props.modal.isDoneVisible ?
            <div className="modal__is-done">
              <input className="modal__done-checkbox" id="isdone-checkbox" type="checkbox" ref="isDone" />
              <label htmlFor="isdone-checkbox">Is Done</label>
            </div>
            :
            null
          }

          {this.props.modal.categoriesVisible && this.props.categories.length > 0 ?
          <select className="modal__selection" ref="category" defaultValue={this.props.currentCategoryId}>
            {categoryOptions}
          </select>
            :
            null
          }

          <button className="modal__save-btn" type="submit">Save</button>

        </form>
      </div>
    );
  }
}