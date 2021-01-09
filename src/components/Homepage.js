import React, { Component } from "react";
import details from "../jsons/Homepage.json";
import "../styles/Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div id="hmpg-section">
        <div className="centered" id="hmpg-info">
          <div id="hmpg-name">{details.name}</div>
          <div id="hmpg-position">{details.position}</div>
        </div>
      </div>
    );
  }
}
