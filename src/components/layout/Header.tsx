import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

interface HeaderContainerProps {
  isToggle: boolean;
}

const Header = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const handleMenuToggle = () => {
    return setIsToggle(!isToggle);
  };
  useEffect(() => {
    console.log(isToggle);
  }, [isToggle]);
  return (
    <HeaderContainer isToggle={isToggle}>
      <HeaderNav>
        <Link to="/">
          <div className="logo">Logo</div>
        </Link>
        <div className="nav">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/collection">collection</NavLink>
          </li>
          <li>FAQ</li>
        </div>
        <div className="toggle" onClick={handleMenuToggle}>
          [ Menu ]
        </div>
      </HeaderNav>
      {/* toggle시 보여지는 menu */}
      {isToggle && (
        <ToggleMenu>
          <div className="menuContents">
            <div className="menu1">teststestsafasdnjfs</div>
            <div className="menu1">teststestsafasdasdfasdfadsfasdfsdnjfs</div>
          </div>
          <div className="menu">
            <ul className="menuNav">
              <li>
                <NavLink to="/">COMPANY</NavLink>
              </li>
              <li>
                <NavLink to="/collection">COLLECTION</NavLink>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </ToggleMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;

// 메인 header
const HeaderContainer = styled.div<HeaderContainerProps>`
  box-sizing: border-box;
  width: 100%;
  height: ${({ isToggle }) => (isToggle ? "400px" : "50px")};
  background-color: ${({ isToggle }) =>
    isToggle ? "var(--black)" : "transparent"};
  color: ${({ isToggle }) => (isToggle ? "var(--primary)" : "var(--black)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  transition: 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  z-index: 100;
`;

// header 상단메뉴
const HeaderNav = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: var(--font-xl);
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 20px; /* nav 내부의 아이템 간의 간격을 조정 */
  }
  .active {
    opacity: 0.6;
  }

  .toggle {
    font-size: var(--font-md);
    cursor: pointer;
  }
`;

// toggle menu
const ToggleMenu = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--white);
  height: 100%;
  width: 100%;
  padding-top: 20px;

  /* 왼쪽 */
  .menuContents {
    width: 100%;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: end;
  }
  .menu1 {
    max-width: 200px;
    word-wrap: break-word;
    padding: 20px;
    border: 1px solid var(--primary-dark);
    border-radius: 5px;
    font-size: var(--font-xs);
  }

  /* 오른쪽 */
  .menu {
    /* height: 100%; */
    width: 100%;
  }
  .menuNav {
    font-size: var(--font-hg);
    font-weight: 600;
    cursor: pointer;
    position: relative;
    li {
      transition: all.3s;
      &:hover {
        transform: translateX(30px);
      }
      &:hover::after {
        content: "";
        width: 5px;
        height: 100%;
        background-color: var(--white);
        position: absolute;
        left: -30px;
        top: 0;
      }
    }
  }
`;
