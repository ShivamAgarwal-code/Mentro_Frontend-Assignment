import React from "react";
import styles from "./MainUser.module.css";

function MainUser(props) {
  return (
    <React.Fragment>
      <div
        className={`${styles.mainUser} ${
          props.data.key === "one" && styles.one
        } ${props.data.key === "two" && styles.two} ${
          props.data.key === "three" && styles.three
        } ${props.data.key === "four" && styles.four} ${
          props.data.key === "five" && styles.five
        }`}
      ></div>
      <div className={styles.userName}>{props.data.name}</div>
    </React.Fragment>
  );
}

export default MainUser;
