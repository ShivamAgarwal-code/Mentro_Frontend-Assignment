import React from "react";
import styles from "./Ellipse.module.css";

function Ellipse(props) {
  return (
    <div className={styles.ellipse} style={{ background: props.color }}></div>
  );
}

export default Ellipse;
