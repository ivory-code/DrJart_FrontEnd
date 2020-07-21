import React from "react";
import SideNav from "./SideNav/SideNav";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="Nav">
        <SideNav />
        <header className="navHeader">
          <div className="navWrap">
            <h1 className="navMainCate">제품</h1>
            <ul className="navSubCate">
              <li>모든제품</li>
              <li>공식몰 단독 혜택</li>
              <li>민감피부솔루션</li>
              <li>유형별</li>
              <li>라인별</li>
              <li>온라인세트</li>
              <li>제품 리뷰</li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
