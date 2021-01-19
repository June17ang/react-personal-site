import React from "react";
import { details } from "../data/About";

export default function About() {
  return (
    <div>
      <section id="aboutme">
        <div id="aboutmeDiv">
          <div className="aboutme-content">
            <div className="aboutmeTitle title">{details.title}</div>
            <div className="aboutmeDesc desc">
              {details.desc.map((descr) => (
                <div>{descr}</div>
              ))}
            </div>
          </div>
          <div className="aboutmeAnimation"></div>
        </div>
      </section>
    </div>
  );
}
