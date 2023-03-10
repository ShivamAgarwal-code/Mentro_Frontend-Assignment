import React from "react";
import styles from "./Users.module.css";
import { motion } from "framer-motion";

const two = [
  { x: -460, y: -150 },
  { x: -900, y: 0 },
  { x: -1200, y: 400 },
  { x: 280, y: 400 },
  { x: 0, y: 0 },
];
const three = [
  { x: -300, y: -400 },
  { x: -750, y: -550 },
  { x: -1200, y: -400 },
  { x: -1500, y: 0 },
  { x: 0, y: 0 },
];
const four = [
  { x: 1500, y: 0 },
  { x: 1200, y: -400 },
  { x: 750, y: -550 },
  { x: 200, y: -400 },
  { x: 0, y: 0 },
];
const five = [
  { x: -250, y: 400 },
  { x: 1250, y: 400 },
  { x: 970, y: 0 },
  { x: 500, y: -150 },
  { x: 0, y: 0 },
];
const six = [
  { x: -450, y: 150 },
  { x: -750, y: 550 },
  { x: 750, y: 550 },
  { x: 500, y: 200 },
  { x: 0, y: 0 },
];

const twoRight = [
  { x: 300, y: 400 },
  { x: -1200, y: 400 },
  { x: -970, y: 0 },
  { x: -450, y: -150 },
  { x: 0, y: 0 },
];
const threeRight = [
  { x: -1500, y: 0 },
  { x: -1280, y: -420 },
  { x: -760, y: -580 },
  { x: -230, y: -400 },
  { x: 0, y: 0 },
];
const fourRight = [
  { x: 235, y: -420 },
  { x: 750, y: -570 },
  { x: 1250, y: -400 },
  { x: 1500, y: 0 },
  { x: 0, y: 0 },
];
const fiveRight = [
  { x: 500, y: -160 },
  { x: 970, y: 0 },
  { x: 1270, y: 400 },
  { x: -300, y: 400 },
  { x: 0, y: 0 },
];
const sixRight = [
  { x: 450, y: 150 },
  { x: 750, y: 550 },
  { x: -750, y: 550 },
  { x: -500, y: 200 },
  { x: 0, y: 0 },
];

let current2 = 0;
let current3 = 0;
let current4 = 0;
let current5 = 0;
let current6 = 0;

let current2right = 0;
let current3right = 0;
let current4right = 0;
let current5right = 0;
let current6right = 0;

function Users(props) {
  if (current2 === 5) {
    current2 = 0;
    current3 = 0;
    current4 = 0;
    current5 = 0;
    current6 = 0;
  }
  if (current2 === -1) {
    current2 = 4;
    current3 = 4;
    current4 = 4;
    current5 = 4;
    current6 = 4;
  }
  if (current2right === 5) {
    current2right = 0;
    current3right = 0;
    current4right = 0;
    current5right = 0;
    current6right = 0;
  }
  if (current2right === -1) {
    current2right = 4;
    current3right = 4;
    current4right = 4;
    current5right = 4;
    current6right = 4;
  }
  if (props.Rotate === 1) {
    current2right -= 1;
    current3right -= 1;
    current4right -= 1;
    current5right -= 1;
    current6right -= 1;
  }
  if (props.Rotate === 2) {
    current2 -= 1;
    current3 -= 1;
    current4 -= 1;
    current5 -= 1;
    current6 -= 1;
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div
          className={`${styles.path} ${props.color === 0 ? "" : styles.path2}`}
        ></div>
        <motion.div
          className={styles.userImg}
          animate={
            props.Rotate === 1
              ? two[current2++]
              : props.Rotate === 2
              ? twoRight[current2right++]
              : ""
          }
        ></motion.div>
        <motion.div
          className={styles.userImg}
          animate={
            props.Rotate === 1
              ? three[current3++]
              : props.Rotate === 2
              ? threeRight[current3right++]
              : ""
          }
        ></motion.div>
        <motion.div
          className={styles.userImg}
          animate={
            props.Rotate === 1
              ? four[current4++]
              : props.Rotate === 2
              ? fourRight[current4right++]
              : ""
          }
        ></motion.div>
        <motion.div
          className={styles.userImg}
          animate={
            props.Rotate === 1
              ? five[current5++]
              : props.Rotate === 2
              ? fiveRight[current5right++]
              : ""
          }
        ></motion.div>
        <motion.div
          className={styles.userImg}
          animate={
            props.Rotate === 1
              ? six[current6++]
              : props.Rotate === 2
              ? sixRight[current6right++]
              : ""
          }
        ></motion.div>
      </div>
    </React.Fragment>
  );
}

export default Users;
