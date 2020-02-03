import React, { Component } from "react";
import "./style/Card.css";
import {Button} from 'react-bootstrap';

export default class Card extends Component {
//   constructor(props) {
//     super(props);
//   }

  componentDidMount() {
    // console.log("ini card", this.props);
  }

  render() {
    return <Button variant="outline-light" className={"kartu"} onClick={this.clicked}>{this.props.name}</Button>;
  }

  clicked = () => {
      alert(this.props.url)
  }
}
