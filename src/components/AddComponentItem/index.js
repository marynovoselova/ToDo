import React, { Component } from "react";
import './index.css';

export default class AddComponentItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
      this.setState({
          label: e.target.value
      })
    };

    onSubmit = (e) => {
      e.preventDefault();
      this.props.onAdded(this.state.label);
      this.setState({
          label: ''
      });
    };

    render() {
        return (
            <form className="component__item"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control add__panel"
                       onChange={this.onLabelChange}
                       placeholder="add new task"
                       value={this.state.label} />
                <button type="submit"
                        className="btn btn-outline-info btn-sm float-right">
                    <i className="fa fa-plus"></i>
                </button>
            </form>
        );
    };
}