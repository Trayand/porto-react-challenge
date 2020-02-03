import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import "./style/Card.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
      this.setState({searching: e.target.value})
  }

  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.searching}
          className={"main-search"}
          placeholder="Search pokemon"
          type="text"
          name="search"
        />
        <Button>TOMBOL Search</Button>
        <div>{this.state.searching}</div>
      </>
    );
  }
}
