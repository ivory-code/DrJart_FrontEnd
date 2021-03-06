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
    fetch(`${API_URL}/user/signin`, {
      method: "POST",
      body: JSON.stringify({
        user: userId,
        password: userPw,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("access_token", res.access_token);
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
    fetch(`${API_URL}/user/signin/kakao/callback`, {
      method: "POST",
      body: JSON.stringify({
        access_token: res.response.access_token,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("Kakao_token", res.access_token);
        if (res.access_token) {
          this.props.history.push("/main");
        }
      });
  };

  responseGoogle = (res) => {
    fetch(`${API_URL}/user/signin/google`, {
      method: "POST",
      body: JSON.stringify({
        user: res.profileObj.email,
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
            <div className="pageTitleArea">
              <img
                alt="login"
                src="https://image.drjart.com/front/ko/images/util/icon_loginJoin.gif"
              />
              <h2>?????????</h2>
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
                    placeholder="?????????"
                    maxLength="21"
                  />
                  <p
                    className={`error ${
                      isSubmit ? (userId ? "off" : "on") : "off"
                    }`}
                  >
                    ???????????? ??????????????????.
                  </p>
                  <input
                    onChange={this.handleUserInfo}
                    className={isSubmit && !userPw ? "inputError" : ""}
                    type="password"
                    name="userPw"
                    value={userPw}
                    placeholder="????????????"
                    maxLength="21"
                  />
                  <p
                    className={`error ${
                      isSubmit ? (userPw ? "off" : "on") : "off"
                    }`}
                  >
                    ??????????????? ??????????????????.
                  </p>
                  <p
                    className={`validateFail ${
                      isSubmit ? (isValidate ? "off" : "on") : "off"
                    }`}
                  >
                    ????????? ?????? ??????????????? ???????????? ????????????.
                  </p>
                  <ul className="loginInfoFind">
                    <li className="findId">????????? ??????</li>
                    <li className="findPw">???????????? ??????</li>
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
                        ?????????
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
                          ????????????
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              <div className="snsLogin">
                <ul className="snsSign">
                  <li className="snsKatalk">
                    <KakaoLogin
                      className="kakao"
                      buttonText="?????????????????? ?????????"
                      jsKey={`b35361ca3b23e85a0bac02bba9fb371b`}
                      onSuccess={this.responseKakao}
                      onFailure={this.responseFail}
                    />
                  </li>
                  <li className="snsLine">???????????? ?????????</li>
                  <GoogleLogin
                    className="google"
                    buttonText="????????? ?????????"
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
