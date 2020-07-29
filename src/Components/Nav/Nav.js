import React from "react";
import { withRouter, Link } from "react-router-dom";
import SideNav from "./SideNav/SideNav.js";
import "./Nav.scss";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      onHover: false,
    };
  }

  mouseOnNav = (id) => {
    this.setState({
      onHover: true,
      currentIndex: id,
    });
  };

  mouseOffNav = () => {
    this.setState({
      onHover: false,
      currentIndex: null,
    });
  };

  render() {
    const { scrollTop } = this.props;

    return (
      <div className="Nav">
        <SideNav scrollTop={scrollTop} />
        <header className="navHeader">
          <div className="navWrap">
            <Link to="/main">
              <h1 className="navMainCate">제품</h1>
            </Link>
            <ul className="navSubCate">
              <Link to="/product/all">
                <li>모든제품</li>
              </Link>
              <li
                className="navSingle"
                onMouseEnter={() => this.mouseOnNav(1)}
                onMouseLeave={() => this.mouseOffNav()}
              >
                공식몰 단독 혜택
                <div
                  className={
                    this.state.currentIndex === 1 ? "selectSol" : "offCate"
                  }
                >
                  <Link to="/product">
                    <p>수분 3종 혜택</p>
                  </Link>
                  <Link to="/product">
                    <p className="flesh">#피부고민올킬</p>
                  </Link>
                </div>
              </li>
              <li
                className="navSol"
                onMouseEnter={() => this.mouseOnNav(2)}
                onMouseLeave={() => this.mouseOffNav()}
              >
                민감피부솔루션
                <div
                  className={
                    this.state.currentIndex === 2 ? "selectSol" : "offCate"
                  }
                >
                  <Link to="/product">
                    <p>회복진정</p>
                  </Link>
                  <Link to="/product">
                    <p>수분공급</p>
                  </Link>
                  <Link to="/product">
                    <p>트러블 케어</p>
                  </Link>
                  <Link to="/product">
                    <p>SUN 케어</p>
                  </Link>
                  <Link to="/product">
                    <p>안티폴루션</p>
                  </Link>
                  <Link to="/product">
                    <p>보습장벽케어</p>
                  </Link>
                  <Link to="/product">
                    <p>커버케어</p>
                  </Link>
                  <Link to="/product">
                    <p>미백&광채</p>
                  </Link>
                  <Link to="/product">
                    <p>결/각질케어</p>
                  </Link>
                  <Link to="/product">
                    <p>안티에이징</p>
                  </Link>
                  <Link to="/product">
                    <p>스팟관리</p>
                  </Link>
                  <Link to="/product">
                    <p>모공관리</p>
                  </Link>
                </div>
              </li>
              <li
                className="navType"
                onMouseEnter={() => this.mouseOnNav(3)}
                onMouseLeave={() => this.mouseOffNav()}
              >
                유형별
                <div
                  className={
                    this.state.currentIndex === 3 ? "selectType" : "offCate"
                  }
                >
                  <Link to="/product">
                    <p>토너/미스트</p>
                  </Link>
                  <Link to="/product">
                    <p>세럼/에센스</p>
                  </Link>
                  <Link to="/product">
                    <p>크림/로션</p>
                  </Link>
                  <Link to="/product">
                    <p>마스크/팩</p>
                  </Link>
                  <Link to="/product">
                    <p>선케어</p>
                  </Link>
                  <Link to="/product">
                    <p>비비크림</p>
                  </Link>
                  <Link to="/product">
                    <p>메이크업</p>
                  </Link>
                  <Link to="/product">
                    <p>클렌징</p>
                  </Link>
                  <Link to="/product">
                    <p>스크럽/필링</p>
                  </Link>
                  <Link to="/product">
                    <p>바디케어</p>
                  </Link>
                  <Link to="/product">
                    <p>립/아이</p>
                  </Link>
                  <Link to="/product">
                    <p>ACC</p>
                  </Link>
                </div>
              </li>
              <li
                className="navLine"
                onMouseEnter={() => this.mouseOnNav(4)}
                onMouseLeave={() => this.mouseOffNav()}
              >
                라인별
                <div
                  className={
                    this.state.currentIndex === 4 ? "selectLine" : "offCate"
                  }
                >
                  <Link to="/product">
                    <p>바이옴</p>
                  </Link>
                  <Link to="/product">
                    <p>솔라바이옴</p>
                  </Link>
                  <Link to="/product">
                    <p>시카페어</p>
                  </Link>
                  <Link to="/product">
                    <p>컨트롤에이</p>
                  </Link>
                  <Link to="/product">
                    <p>세라마이딘</p>
                  </Link>
                  <Link to="/product">
                    <p>크라이오 러버</p>
                  </Link>
                  <Link to="/product">
                    <p>에브리 선 데이</p>
                  </Link>
                  <Link to="/product">
                    <p>V7</p>
                  </Link>
                  <Link to="/product">
                    <p>더마스크</p>
                  </Link>
                  <Link to="/product">
                    <p>더마클리어</p>
                  </Link>
                  <Link to="/product">
                    <p>더메이크업</p>
                  </Link>
                  <Link to="/product">
                    <p>알엑스</p>
                  </Link>
                  <Link to="/product">
                    <p>펩타이딘</p>
                  </Link>
                  <Link to="/product">
                    <p>포맨</p>
                  </Link>
                  <Link to="/product">
                    <p>비 펩타이드</p>
                  </Link>
                </div>
              </li>
              <li>온라인세트</li>
              <li>제품 리뷰</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Nav);
