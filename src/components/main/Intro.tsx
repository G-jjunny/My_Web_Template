import React from "react";
import styles from "../../styles/main/Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContents}>left</div>
      <div className={styles.rightContents}>right</div>
      <div></div>
    </div>
  );
};

export default Intro;
