import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    return (
      <form className="item-add-form d-flex form-row"
            onSubmit={this.onSubmit}>
        <div className="form-group col-md-9">
          <input
            type="text"
            className="form-control"
            onChange={this.onLabelChange}
            placeholder="What needs to be done?"
            value={this.state.label}
          />
        </div>
        <div className="form-group col-md-3">
          <button className="btn btn-outline-secondary">
            Add item
          </button>
        </div>

      </form>
    )
  }
}
