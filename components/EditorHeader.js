import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

import classes from "./EditorHeader.module.css";
import { useState } from "react";

const s = (
  <FontAwesomeIcon
    icon={faUpRightAndDownLeftFromCenter}
    style={{ color: "#434242" }}
  />
);

export default function EditorHeader({ title = "html", onActive, showh }) {
  return (
    <div className={classes["editor-header"]}>
      <button
        className={`${classes["editor-name-btn"]} ${
          showh ? classes["active-btn"] : ""
        }`}
        onClick={onActive}
      >
        {title}
      </button>
      {/* <button className={classes["min-max"]}>
        <FontAwesomeIcon
          icon={faDownLeftAndUpRightToCenter}
          style={{ color: "#ffffff" }}
        />
      </button> */}
    </div>
  );
}
