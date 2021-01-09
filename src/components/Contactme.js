import React from "react";
import { contactInfo } from "../data/Contactme";
import "../styles/Contactme.css";

export default function Contactme() {
  return (
    <div id="section-contactme">
      <div id="ctm-content">
        <h2>Contact Me</h2>
        {Object.values(contactInfo).map((item) => {
          console.log(item);
        })}
      </div>
    </div>
  );
}
