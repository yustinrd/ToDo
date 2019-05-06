import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './modal.module.css';

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
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    );

    return (
      <div className={classNames(styles.modal, {[styles.hidden]: this.props.modal.actionType === ''})}>
        <form className={styles.window} onSubmit={this.handleSubmit}>

          <button className={classNames(styles.saveBtn, 'small-btn', 'small-btn--close')} type="button" onClick={this.props.hideModal}>
            <i className="fas fa-times"/>
          </button>

          <input className={styles.name} type="text" ref="name"/>

          {this.props.modal.isDoneVisible ?
            <div className={styles.isDone}>
              <input className={styles.doneCheckbox} id="isdone-checkbox" type="checkbox" ref="isDone" />
              <label htmlFor="isdone-checkbox">Is Done</label>
            </div>
            :
            null
          }

          {this.props.modal.categoriesVisible && this.props.categories.length > 0 ?
          <select className={styles.selection} ref="category" defaultValue={this.props.currentCategoryId}>
            {categoryOptions}
          </select>
            :
            null
          }

          <button className={styles.saveBtn} type="submit">Save</button>

        </form>
      </div>
    );
  }
}