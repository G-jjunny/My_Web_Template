import { useState } from "react";
import PageTop from "../../components/layout/PageTop";
import styles from "../../styles/collection/collection.module.scss";
import collectionLine from "../../assets/json/CollectionLine.json";
import sample70 from "../../assets/json/sample(70).json";
import sample90 from "../../assets/json/sample(90).json";
import sample125 from "../../assets/json/sample(125).json";
import sample150 from "../../assets/json/sample(150).json";
import sample165 from "../../assets/json/sample(165).json";
import sample190 from "../../assets/json/sample(190).json";
import sample240 from "../../assets/json/sample(240).json";
import ItemBox from "../../components/collection/ItemBox";
import sampleTypes from "./sampleTypes";

// 샘플 데이터를 객체로 모아둡니다.
const sampleData: { [key: number]: sampleTypes[] } = {
  70: sample70,
  90: sample90,
  125: sample125,
  150: sample150,
  165: sample165,
  190: sample190,
  240: sample240,
};

const Index = () => {
  const [selectedLine, setSelectedLine] = useState<number>(70);
  /** 사이즈 controller 데이터 */
  const controllerLines = collectionLine[0].size;
  /** 컨트롤러 클릭 이벤트 함수 */
  const handleSelectLine = (line: number) => {
    setSelectedLine(line);
  };

  return (
    <div className={styles.container}>
      <PageTop />
      <div className={styles.wrapper}>
        <div className={styles.title}>Collection</div>
        <div className={styles.itemCount}>
          <span className={styles.strong}>
            {sampleData[selectedLine].length}
          </span>{" "}
          ITEMS
        </div>
        <div className={styles.options}>
          <div className={styles.filter}>FILTER</div>
          {controllerLines.map((itemsize: number, index: number) => (
            <button
              key={index}
              className={styles.optionBtn}
              onClick={() => handleSelectLine(itemsize)}
            >
              {itemsize} LINE
            </button>
          ))}
        </div>
        <div className={styles.items}>
          {sampleData[selectedLine].map((item: sampleTypes, index: number) => (
            <ItemBox key={index} itemdata={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
