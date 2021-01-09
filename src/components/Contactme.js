import { Button } from "@material-ui/core";
import React from "react";
import { contactInfo } from "../data/Contactme";
import "../styles/Contactme.css";
import { makeStyles } from "@material-ui/core/styles";
import { GitHub, LinkedIn, Twitter, Link } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    textTransform: "none",
  },
}));

export default function Contactme() {
  const classes = useStyles();
  return (
    <section id="section-contactme">
      <div id="section-div-contactme">
        <div id="ctm-content">
          <div>
            <h2>Contact Me</h2>
          </div>
          <div id="contact-list">
            {Object.values(contactInfo).map((item) => {
              return (
                <div key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      startIcon={
                        item.icon === "linkedin" ? (
                          <LinkedIn />
                        ) : item.icon === "github" ? (
                          <GitHub />
                        ) : item.icon === "twitter" ? (
                          <Twitter />
                        ) : (
                          <Link />
                        )
                      }
                    >
                      {item.name}
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
