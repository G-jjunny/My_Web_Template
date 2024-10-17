import React, { useEffect, useState } from "react";
import banner1 from "../../assets/banner2.jpg";
import banner2 from "../../assets/banner.jpg";
import styled from "styled-components";

interface containerProps {
  isOpen: boolean;
}

const MainSlide = () => {
  const [slideItem, setSlideItem] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 이미지 배열
  const images = [banner1, banner2];
  const intervalTime = 8000;

  // 5초마다 슬라이드 이미지 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(false); // 이미지 변경 시 opacity가 다시 0으로 줄어들게 설정
      setSlideItem((prevItem) => (prevItem + 1) % images.length); // 이미지 순환
    }, intervalTime);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 clearInterval
  }, [images.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [slideItem]);

  return (
    <SlideContainer key={slideItem} backgroundImage={images[slideItem]}>
      {isOpen && (
        <>
          <LayerDiv isOpen={isOpen}></LayerDiv>
          <LayerContents>
            <div className="name">WoodOne</div>
            <div className="des">
              A company specializing in wood flooring that pursues
              nature-friendly interior space
            </div>
          </LayerContents>
        </>
      )}
    </SlideContainer>
  );
};

export default MainSlide;

const SlideContainer = styled.div<{ backgroundImage: string }>`
  width: 100vw;
  height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-size: cover;
  position: relative;
  animation: backgroundFocus 2s ease-in-out;

  @keyframes backgroundFocus {
    0% {
      background-size: 130%;
    }
    100% {
      background-size: 100%;
    }
  }
`;

const LayerDiv = styled.div<containerProps>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--black);
  opacity: 0; /** 초기상태 */
  animation: fadeIn 1s ease-in forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const LayerContents = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0%;
  left: 0;
  color: var(--white);
  text-align: center;
  align-content: center;

  .name {
    font-family: var(--font-play);
    font-size: var(--font-xl);
    font-weight: 900;
  }

  .des {
    font-size: var(--font-md);
    color: #999;
    max-width: 500px;
    margin: 20px auto;
  }
`;
