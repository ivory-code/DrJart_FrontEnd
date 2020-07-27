import React from "react";
import "./member3.scss";

class member3 extends React.Component {
    constructor() {
        super();
        this.state = {
            isHoveredUpper: false,
            isHoveredUpper2: false,
            // 버튼클릭 시 효과 넣은 부분 isHoveredUpper로 되어있습니다. 클래스명 btnWrap으로 되어있는 부분이 버튼 입니다.
            email: "",
            name: "",
            password: "",
            useremail: "",
            username: "",
            userpassword: ""
        }
    }


    componentDidMount() { }


    handleClick = (e) => {
        e.preventDefault();
        fetch("http://10.58.1.71:8000/signup",
            {
                method: "POST", body: JSON.stringify(
                    { name: this.state.name, password: this.state.password, email: this.state.email }),
            })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("Authorization", res.token);
                if (localStorage.getItem("Authorization")) {
                    alert("회원가입 성공하셨습니다."); this.props.history.push("/login");
                } else {
                    alert("처음부터 다시 해주세요");
                    this.props.history.push("/login");
                }
            });
    };

    handleChangeId = (e) => {
        e.preventDefault();
        this.setState({
            id: e.target.value,
        });
    };

    handleChangePw = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value,
        });
    };

    passMain = (e) => {
        e.preventDefault();
        fetch("http://10.58.1.71:8000/signup",  //회원 등록 시 signup으로 fetch 두었고, 토큰명은 Authorization
            {
                method: "POST",
                body: JSON.stringify(
                    { id: this.state.id, password: this.state.password, }),
            })
            .then((res) => res.json()).then((res) => {
                localStorage.setItem("Authorization", res.token);
                if (res.token) {
                    alert("로그인 성공하셨습니다."); this.props.history.push("/login");
                } else {
                    alert("올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.");
                    this.props.history.push("/login");
                }
            });

        e.preventDefault();
        console.log("Login");
        this.props.history.push("/main");
        alert("닥터자르트에 오신 것을 환영합니다.");
    }

    passMember = (e) => {
        alert("사용가능한 ID입니다.")
    }

    handleChangeId = (e) => {
        e.preventDefault();
        this.setState({
            id: e.target.value,
        });
    };

    handleChangePw = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value,
        });
    };

    handleKeyPress = (e) => {     //아이디는 1자 이상 입력, 패스워드는 10자 이상 20자 미만까지만 입력 가능하게 해두었습니다. 조건 완료 시 메인페이지로 갑니다.
        if (this.state.password.length > 10 && this.state.password.length < 20 && this.state.id.length > 1) {
            this.props.history.push("/main");
            alert("비밀번호 10자 ~ 20자 통과, 합격");
        } else {
            this.setState({ click: true });
            alert("올바르게 입력해주세요.");
        }
    }

    render() {
        return (
            <div>
                <article className="container">
                    <div className="List">
                        <ol>
                            <li><button className="topLinkFirst">01 정보입력</button></li>
                            <li><button className="topLink">02 가입완료</button></li>
                        </ol>
                    </div>
                    <div className="motherInputContainer">
                        <img src="https://image.drjart.com/front/ko/images/util/icon_loginJoin.gif" className="logoImage"></img>
                        <h1 className="joinTitle">회원가입</h1>

                        <div className="memberInfo">회원정보 입력</div>
                        <span className="inputBigContainer">
                            <input type="text" placeholder="사용하실 ID를 입력해 주세요." className="inputStyle" onChange={this.handleChangeId} />

                            <div className="btnWrap2">
                                <div className="btn-upper2" onMouseEnter={() => this.setState({ isHoveredUpper2: true })} onMouseLeave={() => this.setState({ isHoveredUpper2: false })}>
                                    <div className="black-bg2" />
                                    <div className={`white-bg2 ${this.state.isHoveredUpper2 ? "hover" : ""}`} />
                                    <button className={`loginBtn2 ${this.state.isHoveredUpper2 ? "hover" : ""}`} onClick={this.passMember}>중복확인</button>
                                </div>
                            </div>
                        </span>

                        <div className="memberInfo">
                            <input type="text" placeholder="패스워드: 영문/숫자 조합으로 10~20자 이내" className="inputStyle" onChange={this.handleChangePw} />
                            <input type="text" placeholder="패스워드를 다시 입력해 주세요." className="inputStyle" />
                        </div>
                        <p className="error">비밀번호를 입력해주세요.</p>

                        <form className="emailDivision">
                            <div className="inputText">
                                <p className="error"></p>
                            </div>

                            <div className="inputEmail">
                                <div className="inputText">
                                    <input name="email1" className="error" type="text" maxLength="25" placeholder="이메일 입력" />
                                </div>
                                <span className="at">@
                                </span>
                                <div className="inputText">
                                    <input name="email2" className="error" type="text" maxLength="25" />

                                </div>
                                <button className="emailSelect" title="검색옵션 선택" type="button">직접입력</button>
                            </div>
                            <p className="ps">* 만 14세 미만은 회원 가입 및 서비스 이용이 불가합니다.</p>
                            <div className="joinTerms">
                                <h1>이용약관 동의</h1>
                                <div className="joinTermsContent">
                                    <p>
                                        회원가입 및 정상적인 서비스 이용을 위해
                                        <br />
                                        아래 약관을 읽어보시고, 동의 여부를 결정해 주세요.
                                        <br />
                                        필수 약관에 동의하셔야 회원가입이 가능합니다.
                                    </p>
                                </div>
                                <button className="checkAllAgree">
                                    <span className=""></span>
                                    모두 확인, 동의합니다.
                                </button>
                            </div>
                            <div className="checkbox">
                                <div className="agreeService">
                                    <input className="essentialTerm" type="checkbox" />
                                    [필수] 서비스 이용약관 동의
                                    <div className="agreementTerm">
                                        <a href="agreement">[전문보기]</a>
                                    </div>
                                </div>
                                <div className="agreeService">
                                    <input className="essentialTerm" type="checkbox" />
                                    [필수] 개인정보 수집·이용동의
                                    <div className="agreementTerm">
                                        <a href="#">[전문보기]</a>
                                    </div>
                                </div>
                                <div className="agreeService">
                                    <input className="essentialTerm" type="checkbox" />
                                      [선택] 광고성 정보 이메일 수신 동의
                                </div>
                                <div className="agreeService">
                                    <input className="essentialTerm" type="checkbox" />
                                   [선택] 광고성 정보 SMS 수신 동의
                                </div>
                                <div className="agreeService">
                                    <input className="essentialTerm" type="checkbox" />
                                  [선택] 광고성 정보 우편물 수신 동의
                                </div>
                            </div>

                            <p className="joinTip">* 선택 항목은 동의하지 않더라도 회원가입이 가능합니다.</p>

                            <div className="btnWrap">
                                <div className="btn-upper" onMouseEnter={() => this.setState({ isHoveredUpper: true })} onMouseLeave={() => this.setState({ isHoveredUpper: false })}>
                                    <div className="black-bg" />
                                    <div className={`white-bg ${this.state.isHoveredUpper ? "hover" : ""}`} />
                                    <button className={`loginBtn ${this.state.isHoveredUpper ? "hover" : ""}`} onClick={this.handleKeyPress}>Dr.Jart+ 가 입 하 기</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </article>
            </div >
        );
    }
}

export default member3;