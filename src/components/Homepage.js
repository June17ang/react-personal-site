import React, { useState } from "react";
import { details } from "../data/Homepage";
import "../styles/Homepage.css";

export default function Homepage() {
  return (
    <div id="hmpg-section">
      <div className="centered" id="hmpg-info">
        <div>
          <img id="hmpg-profile" src={details.profile} alt="my profile image" />
        </div>
        <div>
          <div id="hmpg-name">{details.name}</div>
          <div id="hmpg-position">
            I'm <span>{details.position}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
