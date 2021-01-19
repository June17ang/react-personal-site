import React from "react";
import { details } from "../data/Home";

export default function Home() {
  return (
    <div>
      <section id="homepage">
        <div className="homepage-content">
          <div className="personal-info">
            <div className="greeting">
              <div>Hello.</div>
              <div>I'm {details.name}</div>
            </div>
            <div className="position">
              <div className="cur-position">{details.position}</div>
              <div className="adposition">
                {details.adposition.map((pos) => (
                  <div>{pos}</div>
                ))}
              </div>
              <div className="homelinkedin-div">
                <a
                  className="homelinkedin btnShape"
                  href={details.linkedin}
                  target="_blank"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
          <div className="home-canvas"></div>
        </div>
      </section>
    </div>
  );
}
