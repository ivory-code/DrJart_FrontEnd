import React from "react";
import "./SideNav.scss";

class SideNav extends React.Component {
  render() {
    return (
      <div className="sideNavAllWrap">
        <nav className="sideNavWrap">
          <div className="sideNavMenu">
            <ul className="sideGoHome">
              <li className="plusIcon">
                <img alt="plus" src="/images/plusicon.png" />
              </li>
            </ul>
            <ul className="sideMenu">
              <span></span>
              <span></span>
              <span></span>
            </ul>
            <ul className="sideBottom">
              <li className="myInfo">
                <img
                  className="myProfile"
                  alt="myInfo"
                  src="/images/myinfo.png"
                />
              </li>
              <li className="threeIcon">
                <img alt="cart" src="/images/cart.png" />
                <img alt="search" src="/images/search.png" />
                <img alt="login" src="/images/login.png" />
              </li>
            </ul>
          </div>
        </nav>
        <aside className="asideBtn">
          <button className="chatBtn">
            <div className="naverChat" />
            <div className="kakaoChat" />
            <div className="webChat" />
            <div className="offchat" />
          </button>
          <div className="chats"></div>
        </aside>
      </div>
    );
  }
}

export default SideNav;
