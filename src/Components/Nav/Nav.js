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
      category: [
        {
          type: "navSingle",
          cate: "공식몰 단독 혜택",
          switch: "selectSol",
          menus: ["수분 3종 혜택", "#피부고민올킬"],
        },
        {
          type: "navSol",
          cate: "민감피부솔루션",
          switch: "selectSol",
          menus: [
            "회복진정",
            "수분공급",
            "트러블 케어",
            "SUN 케어",
            "안티폴루션",
            "보습장벽케어",
            "커버케어",
            "미백&광채",
            "결/각질케어",
            "안티에이징",
            "스팟관리",
            "모공관리",
          ],
        },
        {
          type: "navType",
          cate: "유형별",
          switch: "selectType",
          menus: [
            "토너/미스트",
            "세럼/에센스",
            "크림/로션",
            "마스크/팩",
            "선케어",
            "비비크림",
            "메이크업",
            "클렌징",
            "스크럽/필링",
            "바디케어",
            "립/아이",
            "ACC",
          ],
        },
        {
          type: "navLine",
          cate: "라인별",
          switch: "selectLine",
          menus: [
            "바이옴",
            "솔라바이옴",
            "시카페어",
            "컨트롤에어",
            "세라마이딘",
            "크라이오 러버",
            "에브리 선 데이",
            "V7",
            "더마스크",
            "더마클리어",
            "더메이크업",
            "알엑스",
            "펩타이딘",
            "포맨",
            "비 펩타이드",
          ],
        },
      ],
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
    const { currentIndex, category } = this.state;

    return (
      <nav className="Nav">
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
              {category.map((list, i) => {
                return (
                  <li
                    key={i}
                    className={list.type}
                    onMouseEnter={() => this.mouseOnNav(i + 1)}
                    onMouseLeave={() => this.mouseOffNav()}
                  >
                    {list.cate}
                    <div
                      className={
                        currentIndex === i + 1 ? list.switch : "offCate"
                      }
                    >
                      {list.menus.map((item) => {
                        return (
                          <Link to="/product/all">
                            <p className="selectMenu">{item}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </li>
                );
              })}
              <li>온라인세트</li>
              <li>제품 리뷰</li>
            </ul>
          </div>
        </header>
      </nav>
    );
  }
}

export default withRouter(Nav);
