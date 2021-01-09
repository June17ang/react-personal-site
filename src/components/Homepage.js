import React, { useState } from "react";
import { details } from "../data/Homepage";
import "../styles/Homepage.scss";
import { Menu, Close } from "@material-ui/icons";

export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState("none");

  const fallingItemList = () => {
    let arr = [];

    for (let i = details.charMin; i <= details.charMax; i++) {
      arr.push(<div className="falling-item">{String.fromCharCode(i)}</div>);
    }

    return (
      <div className="falling-item-lists" aria-hidden="true">
        {arr}
      </div>
    );
  };

  const viewMenu = () => {
    if (menuOpen === "none") {
      setMenuOpen("block");
    } else {
      setMenuOpen("none");
    }
  };

  return (
    <section id="section-homepage">
      {/* effect */}
      {fallingItemList()}

      <div id="section-div-homepage">
        <div className="centered hmpg-content">
          <div className="menu" style={{ display: menuOpen }}>
            <div className="menu-items">
              <div id="menu-close" onClick={viewMenu}>
                <Close />
              </div>
              {Object.values(details.nav).map((nav) => {
                return (
                  <div key={nav.name}>
                    <a href={nav.section} className="menu-anchor">
                      <div className="menu-anchor-div">
                        <span>{nav.name}</span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div id="hmpg-info">
            <div>
              <img id="hmpg-profile" src={details.profile} alt="my profile" />
              <div onClick={viewMenu} className="menu-bubble">
                <div className="menu-text">
                  <div>
                    <Menu />
                  </div>
                  <div>Menu</div>
                </div>
              </div>
            </div>
            <div>
              <div id="hmpg-name">{details.name}</div>
              <div id="hmpg-position">
                I'm <span>{details.position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
