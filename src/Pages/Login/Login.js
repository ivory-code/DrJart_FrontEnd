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
            id: "",
            password: "",
            userid: "",
            userpassword: ""
        };
    }

    componentDidMount() {

    }

    handleClick = (e) => {
        e.preventDefault();
        fetch("http://10.58.1.71:8000/signin",
            {
                method: "POST", body: JSON.stringify(
                    { userid: this.state.id, password: this.state.password }),
            })
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem("Authorization", res.token);
                if (localStorage.getItem("Authorization")) {
                    alert("로그인 성공하셨습니다."); this.props.history.push("/");
                } else {
                    alert("올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.");
                    this.props.history.push("signin");
                }
            });
    };

    handleLogin = (e) => {
        e.preventDefault();
        if (this.state.id === this.state.userid && this.password === this.userpassword) {
            this.props.history.push("/main");
            alert("닥터자르트에 오신 것을 환영합니다.");
        } else if (this.state.id !== this.state.userid && this.state.password !== this.state.userpassword) {
            this.setState({ click: true });
            alert("다시 입력해주세요.");
        }
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

    handleKeyPress = (e) => {
        /*if (e.key === "Enter") {
            this.handlepassMain();
        }*/
        if (this.state.id === this.state.userid && this.password === this.userpassword) {
            this.props.history.push("/main");
            alert("닥터자르트에 오신 것을 환영합니다.");
        } else if (this.state.id !== this.state.userid && this.state.password !== this.state.userpassword) {
            this.setState({ click: true });
            alert("다시 입력해주세요.");
        }
    }

    passMain = (e) => {
        e.preventDefault();
        fetch("http://10.58.1.71:8000/signin",
            {
                method: "POST",
                body: JSON.stringify(
                    { userid: this.state.id, password: this.state.password, }),
            })
            .then((res) => res.json()).then((res) => {
                localStorage.setItem("Authorization", res.token);
                if (res.token) {
                    alert("로그인 성공하셨습니다."); this.props.history.push("/");
                } else {
                    alert("올바른 사용자가 아닙니다. 회원가입 먼저 해주세요.");
                    this.props.history.push("signin");
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
                            <input onChange={this.handleChangeId} type="text" className="inpText" name="txtLoginId" id="txtLoginId" placeholder="아이디" maxLength="21" />
                            <div className="inpText">
                                <input onChange={this.handleChangePw} type="password" className="inpText" name="txtLoginPw" id="txtLoginPw" placeholder="비밀번호"
                                    maxLength="21" />
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
                                <button className={`loginBtn ${this.state.isHoveredUpper ? "hover" : ""}`} onClick={this.handleClick}>로그인</button>
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
                                    <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount%2Finfo"> 카카오톡 로그인
                                        <img src="./images/kaka.png" />
                                    </a>
                                </li>
                                <li className="snsFabook">
                                    <a href="https://ko-kr.facebook.com/"> 페이스북 로그인
                                        <img src="./images/fafa.png" />
                                    </a>
                                </li>
                                <li className="snsLine">
                                    <a href="https://help.line.me/line/win/categoryId/10000371/pc?lang=ko&country=KR"> Line으로 로그인
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