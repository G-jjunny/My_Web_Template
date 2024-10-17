import React from "react";
import styles from "../../styles/main/CollectionIntro.module.scss";
import { Link } from "react-router-dom";

const CollectionIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContents}>
        <img src="" alt="img" className={styles.leftImage} />
      </div>
      <div className={styles.rightContents}>
        <div className={styles.title}>COLLECTION</div>
        <div className={styles.titleDes}>
          저희 WoodOne은 마루재의 전문지식과 노하우를 바탕으로 친환경 마루재인
          이태리 명품 원목마루{" "}
          <span className={styles.strong}>Ideal Legno</span>제품과 원목마루의
          대중화를 위한 <span className={styles.strong}>Green Forest</span>{" "}
          제품을 수입 판매를 하고있습니다.
        </div>
        <ul className={styles.titleLink}>
          <li className={styles.list}>
            <Link to="/collection">ALL COLLECTION</Link>
          </li>
          <li className={styles.list}>GREEN FOREST</li>
          <li className={styles.list}>IDEAL LEGNO</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default CollectionIntro;
