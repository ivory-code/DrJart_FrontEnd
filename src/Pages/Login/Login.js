import React from "react";
import "./Login.scss";

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            isHoveredUpper: false
        }

        this.state = {
            isHoveredUpper2: false
        }

        this.state = {
            userid: "",
            password: "",
        };
    }

    componentDidMount() {

    }

    /*handleClick = (e) => {
        fetch("http://10.58.1.71:8000/signin",
            {
                method: "POST", body: JSON.stringify(
                    { email: this.state.email, password: this.state.password, }),
            })
            .then((res) => res.json()).then((res) => {
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    alert("로그인 성공하셨습니다."); this.props.history.push("/");
                } else {
                    alert("올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.");
                    this.props.history.push("signUp");
                }
            });
    };*/

    handleLogin = () => {
        if (this.state.Id === this.state.memberId && this.Pw === this.memberPw) {
            this.props.history.push("/main");
            alert("닥터자르트에 오신 것을 환영합니다.");
        } else if (this.state.email !== this.state.memberId && this.state.pw !== this.state.memberPw) {
            this.setState({ click: true });
            alert("다시 입력해주세요.");
        }
    }

    handleChangeId = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handleChangePw = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handlepassMain();
        }
    }

    passMain = (e) => {
        fetch("http://10.58.1.71:8000/signin",
            {
                method: "POST",
                body: JSON.stringify(
                    { email: this.state.email, password: this.state.password, }),
            })
            .then((res) => res.json()).then((res) => {
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    alert("로그인 성공하셨습니다."); this.props.history.push("/");
                } else {
                    alert("올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.");
                    this.props.history.push("signUp");
                }
            });

        e.preventDefault();
        console.log("Login");
        this.props.history.push("/main");
        alert("닥터자르트에 오신 것을 환영합니다.");
    }

    passMember = (e) => {
        this.props.history.push("/member3");
        alert("가입페이지로 이동합니다.");
    }

    render() {
        return (
            <div className="Login">
                <div>
                    <div className="pageTitArea">
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

                                <li className="snsKatalk">
                                    <a>
                                        <img src="./images/kaka.png" />
                                    </a>
                                </li>
                                <li className="snsFabook">
                                    <a>
                                        <img src="./images/fafa.png" />
                                    </a>
                                </li>
                                <li className="snsLine">
                                    <a>
                                        <img src="./images/line.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default Login;