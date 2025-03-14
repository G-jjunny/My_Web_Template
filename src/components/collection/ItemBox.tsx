import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSelectedItem } from "../../redux/selectedItemSlice";
import sampleTypes from "../../pages/collection/sampleTypes";

interface ItemBoxProps {
  itemdata: sampleTypes;
}

const ItemBox: React.FC<ItemBoxProps> = ({ itemdata }) => {
  const dispatch = useDispatch();

  /** 해당 상품 클릭시 dispatch */
  const handleClickItem = () => {
    dispatch(setSelectedItem(itemdata));
  };
  return (
    <ItemDiv>
      <img src="" alt="" />
      <DesDiv>
        <div className="itemName">{itemdata.name}</div>
        <div className="itemColor">{itemdata.color}</div>
        <div className="itemDes">{itemdata.des}</div>
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
