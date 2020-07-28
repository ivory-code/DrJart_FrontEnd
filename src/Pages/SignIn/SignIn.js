import React from "react";
import { withRouter, Link } from "react-router-dom";
import SideNav from "../../Components/Nav/SideNav/SideNav.js";
import Footer from "../../Components/Footer/Footer.js";
import API_URL from "../../Config.js";
import "./SignIn.scss";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoginBtnHovered: false,
      isSignUpBtnHovered: false,
      userId: "",
      userPw: "",
      isSubmit: false,
      isValidate: false,
    };
  }

  handleUserInfo = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, userPw } = this.state;
    fetch(`${API_URL}/signin`, {
      method: "POST",
      body: JSON.stringify({
        userid: userId,
        password: userPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("Authorization", res.access_token);
        if (res.access_token) {
          this.props.history.push("/main");
        } else {
          this.setState({
            isSubmit: true,
            isValidate: false,
          });
        }
      });
  };

  // 수정중
  // hadleKakaoLogin = () => {
  //   fetch("http://10.58.6.110:8000/user/signin/kakao")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       localStorage.setItem("Kakao_Token", res.access_token);
  //       if (res.access_token) {
  //         this.props.history.push("/main");
  //         window.location.reload();
  //       }
  //     });
  // };

  render() {
    const {
      isLoginBtnHovered,
      isSignUpBtnHovered,
      userId,
      userPw,
      isSubmit,
      isValidate,
    } = this.state;

    return (
      <>
        <SideNav />
        <div className="SignIn">
          <div className="singinBox">
            <div className="pageTitArea">
              <img
                alt=""
                src="https://image.drjart.com/front/ko/images/util/icon_loginJoin.gif"
              />
              <h2>로그인</h2>
            </div>
            <div className="loginCon">
              <div className="inpWrap">
                <form className="inpText" onSubmit={this.handleSubmit}>
                  <input
                    onChange={this.handleUserInfo}
                    className={isSubmit ? (!userId ? "inputError" : "") : ""}
                    type="text"
                    name="userId"
                    value={userId}
                    placeholder="아이디"
                    maxLength="21"
                  />
                  <p
                    className={`error ${
                      isSubmit ? (!userId ? "on" : "off") : "off"
                    }`}
                  >
                    아이디를 입력해주세요.
                  </p>
                  <input
                    onChange={this.handleUserInfo}
                    className={isSubmit ? (!userPw ? "inputError" : "") : ""}
                    type="password"
                    name="userPw"
                    value={userPw}
                    placeholder="비밀번호"
                    maxLength="21"
                  />
                  <p
                    className={`error ${
                      isSubmit ? (!userPw ? "on" : "off") : "off"
                    }`}
                  >
                    비밀번호를 입력해주세요.
                  </p>
                  <p
                    className={`validateFail ${
                      isSubmit ? (isValidate ? "off" : "on") : "off"
                    }`}
                  >
                    아이디 또는 비밀번호가 일치하지 않습니다.
                  </p>
                  <ul className="loginInfoFind">
                    <li className="findId">아이디 찾기</li>
                    <li className="findPw">비밀번호 찾기</li>
                  </ul>
                  <div className="loginBtnWrap">
                    <div
                      className="btn-upper"
                      onMouseEnter={() =>
                        this.setState({ isLoginBtnHovered: true })
                      }
                      onMouseLeave={() =>
                        this.setState({ isLoginBtnHovered: false })
                      }
                    >
                      <div className="loginBlack-bg" />
                      <div
                        className={`loginWhite-bg ${
                          isLoginBtnHovered ? "hover" : ""
                        }`}
                      />
                      <button
                        className={`loginBtn ${
                          isLoginBtnHovered ? "hover" : ""
                        }`}
                        type="submit"
                      >
                        로그인
                      </button>
                    </div>
                  </div>
                  <div className="signupBtnWrap">
                    <div
                      className="signupUpper"
                      onMouseEnter={() =>
                        this.setState({ isSignUpBtnHovered: true })
                      }
                      onMouseLeave={() =>
                        this.setState({ isSignUpBtnHovered: false })
                      }
                    >
                      <div className="signupBlack-bg" />
                      <div
                        className={`signupWhite-bg ${
                          isSignUpBtnHovered ? "hover" : ""
                        }`}
                      />
                      <Link to="/signup">
                        <button
                          className={`signupBtn ${
                            isSignUpBtnHovered ? "hover" : ""
                          }`}
                          type="submit"
                        >
                          회원가입
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="snsLogin">
                <ul className="snsSign">
                  <li className="snsKatalk">
                    <a href="http://10.58.6.110:8000/user/signin/kakao">
                      <span className="snsLoginImg kakao"></span>
                      <span className="snsLoginTitle kakao">
                        카카오톡으로 로그인
                      </span>
                    </a>
                  </li>
                  <li className="snsLine">
                    <a href="https://help.line.me/line/win/categoryId/10000371/pc?lang=ko&country=KR">
                      <span className="snsLoginImg naver"></span>
                      <span className="snsLoginTitle naver">
                        네이버로 로그인
                      </span>
                    </a>
                  </li>
                  <li className="snsFabook">
                    <a href="https://ko-kr.facebook.com/">
                      <span className="snsLoginImg facebook"></span>
                      <span className="snsLoginTitle facebook">
                        페이스북으로 로그인
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(Login);
