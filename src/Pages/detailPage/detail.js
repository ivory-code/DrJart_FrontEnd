import React from "react";
import "./detail.scss";

class detail extends React.Component {
    render() {
        return (
            <div className="bigContainer">
                <di className="pdtQuickBar">
                    <div className="optFlag">
                        <span className="flagNew">NEW</span>
                    </div>

                    <h2 className="pdtTit">2세대 시카페어 크림</h2>
                    <div className="pdtInfo">
                        <p className="pdtdes">#시카페어크림</p>
                        <div className="pdtPrice">
                            <span className="costType2">"48,000"</span>
                            <span className="couponTxtRed">쿠폰 사용불가</span>
                            <span className="ppointTxtRed">적립금 사용불가</span>
                            <span className="cpnPointTxtRed">쿠폰 및 적립금 사용불가</span>
                        </div>


                        <img src="https://image.drjart.com/front/ko/images/util/icon_loginJoin.gif" />
                        <h2 className="titEn">로그인</h2>
                        <div className="loginCon">
                            <div className="loginTab btn">
                                <ul>
                                    <li className="loginOn"><a href="#">회원 로그인</a></li>
                                    <li className="loginOn"><a href="#">비회원 주문조회</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="loginCont loginBox On">
                    <div className="inpWrap">
                        <div className="inpText">
                            <input type="text" className="inpText" name="txtLoginId" id="txtLoginId" placeholder="아이디" maxlength="20" />
                            <div className="inpText">
                                <input type="password" className="inpText" name="txtLoginPw" id="txtLoginPw" placeholder="비밀번호"
                                    maxlength="20" />
                            </div>
                        </div>
                        <ul className="loginInfoFind">
                            <li className="findId">
                                <a href="#">아이디 찾기</a>
                            </li>
                            <li className="findPw">
                                <a href="#">비밀번호 찾기</a>
                            </li>
                        </ul>

                        <div className="btnWrap">
                            <div className="btn-upper" onMouseEnter={() => this.setState({ isHoveredUpper: true })} onMouseLeave={() => this.setState({ isHoveredUpper: false })}>
                                <div className="black-bg" />
                                <div className={`white-bg ${this.state.isHoveredUpper ? "hover" : ""}`} />
                                <button className={`loginBtn ${this.state.isHoveredUpper ? "hover" : ""}`} onClick={this.passMain}>로그인</button>
                            </div>
                        </div>
                        <div className="btnWrap2">
                            <div className="btn-upper2" onMouseEnter={() => this.setState({ isHoveredUpper2: true })} onMouseLeave={() => this.setState({ isHoveredUpper2: false })}>
                                <div className="black-bg2" />
                                <div className={`white-bg2 ${this.state.isHoveredUpper2 ? "hover" : ""}`} />
                                <button className={`loginBtn2 ${this.state.isHoveredUpper2 ? "hover" : ""}`} onClick={this.passMember}>회원가입</button>
                            </div>
                        </div>

                        <div className="snsLogin">
                            <p>소셜 계정으로 로그인</p>
                            <ul className="snsSign">
                                <li className="snsFabook"><img src="./images/facebooklogo4.png" width="50" height="50" />

                                </li>
                                <li className="snsKatalk">
                                    <img src="./images/kakaotalkreal.jpg" width="80" height="50" />

                                </li>
                                <li className="snsLine">

                                    <img src="./images/naverreal.jpg" width="50" height="50" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default detail;