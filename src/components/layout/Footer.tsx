import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
// import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <FooterNav></FooterNav>
        <FooterContents>
          <LeftLogo>
            {/* <img src={Logo} alt="logo" /> */}
            <div className="logo">WOODONE</div>
            <div className="copy">© 2024. 우드원 All rights reserved.</div>
          </LeftLogo>
          <RightContents>
            <div className="social">
              <div className="strong">SOCIAL</div>
              <div className="linkIcon">
                instagram <FaInstagram className="icon" />
              </div>
            </div>
            <div className="info">
              <div className="strong">COMPANY</div>
              <ul>
                <li>CEO : 정병훈</li>
                <li>Business License : 215-08-88208</li>
                <li>Adress 강남구 논현로128길 22-4 세은빌딩 5층</li>
                <li>Tel : 02-547-8165</li>
                <li>Fax : 02-547-8164</li>
                <li>E-mail : woodone@naver.com</li>
              </ul>
            </div>
          </RightContents>
        </FooterContents>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;

/** footer 전체 container */
const FooterContainer = styled.div`
  width: 100vw;
  background-color: var(--black);
  height: calc(100vh - 400px);
`;

/** 반응형 container */
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

/** footer 상단 nav영역 */
const FooterNav = styled.div`
  display: flex;
`;

/** footer 내부 FooterNav 아래 */
const FooterContents = styled.div`
  display: flex;
  flex-direction: row;
  padding: 80px 0 40px;
`;

/** footer 왼쪽 콘텐츠 */
const LeftLogo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white);
  font-size: var(--font-xs);
  img {
    width: 200px;
  }
  .logo {
    font-size: 82px;
    font-weight: 500;
  }
`;

/** footer 우측 콘텐츠 */
const RightContents = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
  gap: 40px;
  color: var(--white);
  .strong {
    font-weight: 600;
    margin-bottom: 10px;
    font-size: var(--font-sm);
  }
  .social {
    .linkIcon {
      align-items: center;
      align-content: center;
      display: flex;
      gap: 5px;
      cursor: pointer;
    }
  }
  .info {
    font-size: var(--font-xs);
    font-weight: 300;
    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;
