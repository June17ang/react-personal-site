import React, { useState } from "react";
import { porfolioLists } from "../data/Portfolio";
import "../styles/Portfolio.css";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "45vw",
    height: "50vh",
    overflowWrap: "break-word",
    overflow: "auto",
    backgroundColor: "#fff",
    border: "1px solid #252525",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});

  const handleOpen = (index) => {
    setOpen(true);
    console.log(porfolioLists[index]);
    setContent(porfolioLists[index]);
  };

  const handleClose = () => {
    setOpen(false);
    setContent({});
  };

  const modalBody = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="modal-title">
        {content.title ? content.title : "Title not found"}
      </h2>
      <div id="modal-content">
        <div style={{ marginBottom: "25px" }}>
          {content.link && (
            <a
              href={content.link}
              style={{ textDecoration: "none" }}
              target="_blank"
            >
              <Button variant="contained">View Portfolio</Button>
            </a>
          )}
        </div>
        <div>
          {content.preview && <img src={content.preview} alt="preview" />}
        </div>
        <div>
          <p id="modal-description">
            {content.desc ? content.desc : "Desc not found"}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div id="section-porfolio">
      <div id="pfl-list">
        {Object.keys(porfolioLists).map((index, key) => {
          return (
            <div
              onClick={(event) => {
                event.preventDefault();
                handleOpen(index);
              }}
              id="pfl-item"
              key={"portfolio-list-key-" + key}
            >
              <span>{index.charAt(0).toUpperCase() + index.slice(1)}</span>
            </div>
          );
        })}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          {modalBody}
        </Modal>
      </div>
    </div>
  );
}
