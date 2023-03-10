import React from "react";
import styles from "./DownButton2.module.css";

function DownButton2(props) {
  return (
    <React.Fragment>
      <button
        className={`${styles.downButton2} ${
          props.color === 0 ? "" : styles.button2
        }`}
        onClick={props.moveRight}
      >
        ↓
      </button>
    </React.Fragment>
  );
}

export default DownButton2;
