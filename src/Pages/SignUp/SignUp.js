import React from "react";
import SideNav from "../../Components/Nav/SideNav/SideNav.js";
import Footer from "../../Components/Footer/Footer.js";
import API_URL from "../../Config.js";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      isHoveredUpper: false,
      userId: "",
      userPw: "",
      userCheckPw: "",
      userMailHead: "",
      userMailTail: "",
      checked: false,
      mailOption: "",
    };
  }

  inputValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleAllAgree = (e) => {
    e.preventDefault();
    const { agreeAll } = this.state;
    this.setState({ agreeAll: !agreeAll });
  };

  handleOption = (e) => {
    this.setState({
      mailOption: e.target.value,
    });
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const { userId, userCheckPw, userMailHead, userMailTail } = this.state;
    const fetchInfo = {
      method: "POST",
      body: JSON.stringify({
        user: userId,
        password: userCheckPw,
        email: `${userMailHead}@${userMailTail}`,
      }),
    };
    if (
      userCheckPw.length >= 4 &&
      userCheckPw.length < 10 &&
      userId.length >= 6
    ) {
      alert("회원가입이 완료되었습니다! 로그인을 진행해주세요.");
      fetch(`${API_URL}/signup`, fetchInfo).then(
        this.props.history.push("/signin")
      );
    } else {
      alert("회원정보가 입력되지 않았습니다.");
    }
  };

  render() {
    const {
      isHoveredUpper,
      userId,
      userPw,
      userCheckPw,
      userMailHead,
      userMailTail,
      agreeAll,
      mailOption,
    } = this.state;
    const { inputValue, handleAllAgree, handleSignUp, handleOption } = this;

    return (
      <>
        <SideNav />
        <div className="SignUp">
          <article className="upContainer">
            <div className="upHead">
              <img
                className="logoImage"
                alt="logoImage"
                src="https://image.drjart.com/front/ko/images/util/icon_loginJoin.gif"
              />
              <h1 className="joinTitle">회원가입</h1>
            </div>
            <form className="upInputInfo" onSubmit={handleSignUp}>
              <h3>회원정보 입력</h3>
              <div className="inputWrap">
                <input
                  className="inputId"
                  type="text"
                  name="userId"
                  placeholder="사용하실 ID를 6자 이상으로 입력해주세요."
                  onChange={inputValue}
                />
              </div>
              <p className={userId.length < 6 ? "error" : "errorOff"}>
                ID를 6자이상 입력하세요.
              </p>
              <div className="memberInfo">
                <input
                  className="inputStyle"
                  type="password"
                  name="userPw"
                  placeholder="영문/숫자 조합으로 4자 이상 ~ 10자 미만으로 입력해주세요."
                  onChange={inputValue}
                />
                <p
                  className={
                    userPw.length >= 4 && userPw.length < 10
                      ? "errorOff"
                      : "error"
                  }
                >
                  비밀번호를 4자 이상 ~ 10자 미만으로 입력하세요.
                </p>
                <input
                  className="inputStyle"
                  type="password"
                  name="userCheckPw"
                  placeholder="비밀번호를 재입력해주세요."
                  onChange={inputValue}
                />
                <p
                  className={
                    userPw === userCheckPw || userCheckPw.length !== 0
                      ? "errorOff"
                      : "error"
                  }
                >
                  비밀번호를 재입력하세요.
                </p>
                <div className="emailDivision">
                  <div className="inputEmail">
                    <div className="inputText">
                      <input
                        className="myId"
                        name="userMailHead"
                        type="text"
                        maxLength="25"
                        placeholder="이메일을 입력해주세요."
                        onChange={inputValue}
                      />
                    </div>
                    <span className="at">@</span>
                    <div className="inputText">
                      <input
                        className="myAddress"
                        name="userMailTail"
                        type="text"
                        maxLength="25"
                        onChange={inputValue}
                      />
                    </div>
                    <div className="emailSelect">
                      <select
                        className="pickMail"
                        type="button"
                        value={mailOption}
                        onChange={handleOption}
                      >
                        <option value="">직접 입력</option>
                        <option value="gmail.com">gmail.com</option>
                        <option value="naver.com">naver.com</option>
                        <option value="hanmail.net">hanmail.net</option>
                        <option value="nate.com">nate.com</option>
                      </select>
                    </div>
                  </div>
                  <p
                    className={
                      userMailHead.length !== 0 && userMailTail.includes(".")
                        ? "errorOff"
                        : "error"
                    }
                  >
                    이메일을 입력하세요.
                  </p>
                  <p className="ps">
                    * 만 14세 미만은 회원 가입 및 서비스 이용이 불가합니다.
                  </p>
                </div>
              </div>
              <div className="joinWrap">
                <div className="joinTerms">
                  <h3>이용약관 동의</h3>
                  <div className="joinTermsContent">
                    <p>
                      회원가입 및 정상적인 서비스 이용을 위해
                      <br />
                      아래 약관을 읽어보시고, 동의 여부를 결정해 주세요.
                      <br />
                      필수 약관에 동의하셔야 회원가입이 가능합니다.
                    </p>
                  </div>
                  <button
                    className={!agreeAll ? "checkAllAgree" : "activeBtn"}
                    onClick={handleAllAgree}
                  >
                    <span className="checkIcon"></span>
                    <span className="checkedAll">모두 확인, 동의합니다.</span>
                  </button>
                </div>
                <div className="checkbox">
                  <div className="agreeService">
                    <div>
                      <input
                        className="essentialTerm"
                        id="a1"
                        type="checkbox"
                        checked={agreeAll}
                        onChange={handleAllAgree}
                      />
                      <label htmlFor="a1"></label>
                      <span>[필수] 서비스 이용약관 동의</span>
                    </div>
                    <div className="agreementTerm">
                      <button>[전문보기]</button>
                    </div>
                  </div>
                  <div className="agreeService">
                    <div>
                      <input
                        className="essentialTerm"
                        id="a2"
                        type="checkbox"
                        checked={agreeAll}
                        onChange={handleAllAgree}
                      />
                      <label htmlFor="a2"></label>
                      <span>[필수] 개인정보 수집·이용동의</span>
                    </div>
                    <div className="agreementTerm">
                      <button>[전문보기]</button>
                    </div>
                  </div>
                  <div className="agreeService">
                    <div>
                      <input
                        className="essentialTerm"
                        id="a3"
                        type="checkbox"
                        checked={agreeAll}
                        onChange={handleAllAgree}
                      />
                      <label htmlFor="a3"></label>
                      <span>[필수] 광고성 정보 이메일 수신 동의</span>
                    </div>
                  </div>
                  <div className="agreeService">
                    <div>
                      <input
                        className="essentialTerm"
                        id="a4"
                        type="checkbox"
                        checked={agreeAll}
                        onChange={handleAllAgree}
                      />
                      <label htmlFor="a4"></label>
                      <span>[필수] 광고성 정보 SMS 수신 동의</span>
                    </div>
                  </div>
                  <div className="agreeService">
                    <div>
                      <input
                        className="essentialTerm"
                        id="a5"
                        type="checkbox"
                        checked={agreeAll}
                        onChange={handleAllAgree}
                      />
                      <label htmlFor="a5"></label>
                      <span>[필수] 광고성 정보 우편물 수신 동의</span>
                    </div>
                  </div>
                </div>
                <div className="btnWrap">
                  <div
                    className="btnUpper"
                    onMouseEnter={() => this.setState({ isHoveredUpper: true })}
                    onMouseLeave={() =>
                      this.setState({ isHoveredUpper: false })
                    }
                  >
                    <div className="blackBg" />
                    <div className={`whiteBg ${isHoveredUpper && "hover"}`} />
                    <button
                      className={`loginBtn ${isHoveredUpper && "hover"}`}
                      onClick={handleSignUp}
                    >
                      <span>본인 인증하고 가입하기</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </article>
        </div>
        <Footer />
      </>
    );
  }
}

export default SignUp;
