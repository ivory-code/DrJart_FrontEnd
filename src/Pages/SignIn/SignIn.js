import React from "react";
import { withRouter, Link } from "react-router-dom";
import KakaoLogin from "react-kakao-login";
import { GoogleLogin } from "react-google-login";
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
      name: "",
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

  responseKakao = (res) => {
    fetch("http://10.58.6.110:8000/user/signin/kakao/callback", {
      method: "POST",
      body: JSON.stringify({
        access_token: res.response.access_token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("Kakao_token", res.access_token);
        if (res.access_token) {
          this.props.history.push("/main");
        }
      });
  };

  responseGoogle = (res) => {
    fetch("http://10.58.1.198:8000/signin/google", {
      method: "POST",
      body: JSON.stringify({
        userid: res.profileObj.email,
        name: res.profileObj.name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("Google_token", res.access_token);
        if (res.access_token) {
          this.props.history.push("/main");
        }
      });
  };

  responseFail = (err) => {
    console.error(err);
  };

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
          <div className="signinBox">
            <div className="pageTitArea">
              <img
                alt="login"
                src="https://image.drjart.com/front/ko/images/util/icon_loginJoin.gif"
              />
              <h2>로그인</h2>
            </div>
            <div className="loginContainer">
              <div className="inpWrap">
                <form className="inpText" onSubmit={this.handleSubmit}>
                  <input
                    onChange={this.handleUserInfo}
                    className={isSubmit && !userId ? "inputError" : ""}
                    type="text"
                    name="userId"
                    value={userId}
                    placeholder="아이디"
                    maxLength="21"
                  />
                  <p
                    className={`error ${
                      isSubmit ? (userId ? "off" : "on") : "off"
                    }`}
                  >
                    아이디를 입력해주세요.
                  </p>
                  <input
                    onChange={this.handleUserInfo}
                    className={isSubmit && !userPw ? "inputError" : ""}
                    type="password"
                    name="userPw"
                    value={userPw}
                    placeholder="비밀번호"
                    maxLength="21"
                  />
                  <p
                    className={`error ${
                      isSubmit ? (userPw ? "off" : "on") : "off"
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
                    <span className="snsLoginImg kakaotalk">
                      <img
                        alt="kakao"
                        src="https://i0.wp.com/forhappywomen.com/wp-content/uploads/2018/11/%EC%82%B0%EB%B6%80%EC%9D%B8%EA%B3%BC-%ED%8F%AC%ED%95%B4%ED%94%BC%EC%9A%B0%EB%A8%BC-%EB%AC%B8%EC%9D%98-%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%8C%EB%9F%AC%EC%8A%A4%EC%B9%9C%EA%B5%AC-%EB%B2%84%ED%8A%BC.png?resize=586%2C586&ssl=1"
                      />
                    </span>
                    <KakaoLogin
                      className="kakao"
                      buttonText="카카오톡으로 로그인"
                      jsKey={`b35361ca3b23e85a0bac02bba9fb371b`}
                      onSuccess={this.responseKakao}
                      onFailure={this.responseFail}
                    />
                  </li>
                  <li className="snsLine">
                    <span className="snsLoginImg naver">
                      <img
                        alt="naver"
                        src="https://lh3.googleusercontent.com/proxy/dLu-lMirG0ASNSHz0wdlGbhpfEb_blCptAjFbF-Rqivu06srDWPA3JCwkXfN3gILJzH4_bNEVVRVA2hPV08nH9EA7Eqt3WhwD-TtHX7cJTO3kLVCQfOCh_WLRXsTPc7nKTcw8cTRWtsuaKGJnQKWX28Yrz17NQsVujDRbJXg5oJ-ON88wBAyQ1HCnPaulNxePec9r3Lk4HjnFHhjJdDJf414GM2nxh16sQUDZAryVtzdrEfQoRlvZeOIhs4"
                      />
                    </span>
                    네이버로 로그인
                  </li>
                  <GoogleLogin
                    className="google"
                    buttonText="구글로 로그인"
                    clientId="684103721606-b8vmaoip3he53h3j8mq2dm268uip7ndm.apps.googleusercontent.com"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                  />
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
