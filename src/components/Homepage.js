import React, { Component } from "react";
import details from "../jsons/Homepage.json";
import "../styles/Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div id="homepage-section">
        <div>{details.name}</div>
        <div>{details.position}</div>
      </div>
    );
  }
}
