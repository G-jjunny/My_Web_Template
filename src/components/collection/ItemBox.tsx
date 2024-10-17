import React from "react";
import styled from "styled-components";

interface itemProps {
  name: string;
  color: string;
  des: string;
}

const ItemBox: React.FC<itemProps> = ({ name, color, des }) => {
  return (
    <ItemDiv>
      <img src="" alt="" />
      <DesDiv>
        <div className="itemName">{name}</div>
        <div className="itemColor">{color}</div>
        <div className="itemDes">{des}</div>
      </DesDiv>
    </ItemDiv>
  );
};

export default ItemBox;

const ItemDiv = styled.div`
  box-sizing: border-box;
  width: 100px;
  height: 200px;
  background-color: var(--secondary);
`;
const DesDiv = styled.div`
  display: flex;
  flex-direction: column;
  .itemName {
  }
  .itemColor {
  }
  .itemDes {
  }
`;
