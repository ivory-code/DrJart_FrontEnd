import React from "react";
import "./SideNav.scss";

class SideNav extends React.Component {
  constructor() {
    super();
    this.state = {
      navOn: false,
    };
  }

  handleNav = () => {
    const { navOn } = this.state;
    if (navOn === false) {
      this.setState({ navOn: true });
    } else {
      this.setState({ navOn: false });
    }
  };

  render() {
    const { navOn } = this.state;
    const { scrollTop } = this.props;
    const { handleNav } = this;

    return (
      <div className="SideNav">
        <nav className="sideNavWrap">
          <div className="sideNavMenu">
            <ul className="sideGoHome">
              <li className="plusIcon">
                <img alt="plus" src="/images/plusicon.png" />
              </li>
            </ul>
            <ul className="sideMenu" onClick={handleNav}>
              <span></span>
              <span></span>
              <span></span>
            </ul>
            <ul className="sideBottom">
              <li className="sideIcon">
                <img
                  className="myProfile"
                  alt="myInfo"
                  src="/images/myinfo.png"
                />
                <img className="myCart" alt="cart" src="/images/cart.png" />
                <img className="search" alt="search" src="/images/search.png" />
                <img className="login" alt="login" src="/images/login.png" />
              </li>
            </ul>
          </div>
        </nav>
        <nav className={navOn ? "hideNav" : "hideNavOff"}>
          <div className="hideNavWrap">
            <div className="logoWrap">
              <img alt="logo" src="/images/logo.png" />
            </div>
            <ul className="menuList">
              <li>제품</li>
              <li>이벤트</li>
              <li>스토리</li>
              <li>필터 스페이스</li>
              <li>브랜드</li>
              <li className="jartvIcon">
                <img alt="jartv" src="/images/jartv.png" />
              </li>
              <li className="noticeList">
                <p>멤버십</p>
                <p>고객만족센터</p>
                <p>매장안내</p>
              </li>
            </ul>
            <div className="bottomList">
              <button className="mergeMem">통합회원전환</button>
              <div className="bottomWrap">
                <ul className="lang">
                  <li>KR</li>
                  <li>EN</li>
                  <li>CN</li>
                </ul>
                <img alt="botLogo" src="/images/botLogo.png" />
              </div>
            </div>
          </div>
        </nav>
        <div className="overlay">
          <div className={navOn ? "wrapOthers" : "wrapOff"}></div>
        </div>
        <aside className="asideBtn">
          <button className="chatBtn">
            <div className={`naverChat ${scrollTop > 650 ? "scroll" : ""}`} />
            <div className={`kakaoChat ${scrollTop > 650 ? "scroll" : ""}`} />
            <div className={`webChat ${scrollTop > 650 ? "scroll" : ""}`} />
            <div className={`offchat ${scrollTop > 650 ? "scroll" : ""}`} />
          </button>
        </aside>
      </div>
    );
  }
}

export default SideNav;
