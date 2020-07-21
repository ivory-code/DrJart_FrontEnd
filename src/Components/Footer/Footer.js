import React from "react";
import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerMenuBar">
          <ul className="footerMenu">
            <li className="menuText">
              <span>회사소개</span>│<span>이용약관</span>│
              <span>개인정보처리방침</span>│
              <span>이메일주소 무단 수집거부</span>│<span>고객만족센터</span>
            </li>
          </ul>
          <ul className="footerSelMenu">
            <li className="siteMap">
              <span>Site map</span>
              <img alt="arrow" src="/images/menuArrow.png" />
            </li>
            <li className="familySite">
              <span>Family Site</span>
              <img alt="arrow" src="/images/menuArrow.png" />
            </li>
            <li className="korean">
              <span>Korean</span>
              <img alt="arrow" src="/images/menuArrow.png" />
            </li>
          </ul>
        </div>
        <div className="footerInfo">
          <div className="infoWrap">
            <p>
              <span>
                서울특별시 강남구 역삼동 769-8 엠스페이스빌딩, 도로명 주소 (
                서울특별시 강남구 논현로72길 13 M-SPACE 빌딩 해브앤비 ) │
                대표이사 : 크리스토퍼 킨더슬리 우드
              </span>
            </p>
            <p>
              <span>
                상호명 : 해브앤비(주) │ 사업자 등록번호 : 214-87-63681 │
                통신판매업 신고번호 : 2008 서울 강남-2284호{" "}
                <span className="checkCom">사업자 정보 확인</span>
              </span>
            </p>
            <p>
              <span>
                개인정보관리책임자 : 엄정식 팀장 │ 고객만족센터 : 1544-5453 (
                운영시간 : 09:00~18:00, 점심시간 : 12:50~14:00 ) │ FAX :
                02-3462-9051
              </span>
            </p>
            <p>
              <span>전자우편주소 : webmaster@drjart.com</span>
            </p>
            <p className="copyright">
              Copyright&copy; Have&Be co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
        <div className="footerSticker">
          <ul className="stickerWrap">
            <li className="nature">
              <img alt="mark01" src="/images/mark01.png" />
              <span>
                so9001,14001
                <br />
                환경경영인증 획득
              </span>
            </li>
            <li className="design">
              <img alt="mark02" src="/images/mark02.png" />
              <span>
                기업부실
                <br />
                디자인 연구소 인정
              </span>
            </li>
            <li className="service">
              <img alt="mark03" src="/images/mark03.png" />
              <span>
                에스크로 서비스
                <br />
                가입사실 확인
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
