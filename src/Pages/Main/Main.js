import React from "react";
import Nav from "../../Components/Nav/Nav.js";
import MainStory from "./MainStory/MainStory.js";
import Each from "../Products/Product/Each.js";
import Review from "./Review/Review.js";
import Footer from "../../Components/Footer/Footer.js";
import Slider from "react-slick";
import API_URL from "../../Config.js";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      maindata: [],
    };
  }

  componentDidMount() {
    this.getMainProduct();
  }

  getMainProduct = () => {
    fetch(`${API_URL}/product/main`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          maindata: result.data,
        });
      });
  };

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { maindata } = this.state;

    return (
      <div className="Main">
        <Nav />
        <div className="mainSlider">
          <Slider {...settings}>
            <div className="slideImg">
              <img
                alt="slide01"
                src="https://image.drjart.com/img/008/1594880991821.jpg"
              />
              <ul className="slideTextWrap">
                <li className="titleText">
                  <p>WATERFUL</p>
                  <p>SUMMER</p>
                </li>
                <li className="subText">
                  <p>여름철 무더위에 지친 피부를 위한</p>
                  <p>공홈만의 특별한 수분 3종 혜택 받으세요</p>
                </li>
                <button className="detailBtn">자세히 보기</button>
              </ul>
            </div>
            <div className="slideImg">
              <img
                alt="slide02"
                src="https://image.drjart.com/img/008/1595207154531.jpg"
              />
              <ul className="slideTextWrap">
                <li className="titleText">
                  <p>당신이 잠든 사이</p>
                  <p>수분으로 깨어나는 피부</p>
                </li>
                <li className="subText">
                  <p>밤 사이 지친 피부를 관리하는 #딥슬립크림팩</p>
                  <p>나이트 테라피 마스크를 만나보세요.</p>
                </li>
                <button className="detailBtn">자세히 보기</button>
              </ul>
            </div>
            <div className="slideImg">
              <img
                alt="slide03"
                src="https://image.drjart.com/img/008/1593565883862.jpg"
              />
              <ul className="slideTextWrap">
                <li className="titleText">
                  <p>7월 첫 만남을</p>
                  <p>기념하는 선물</p>
                </li>
                <li className="subText">
                  <p>닥터자르트 공홈에서 첫 구매하고</p>
                  <p>베스트 제품을 체험해보세요!!</p>
                </li>
                <button className="detailBtn">자세히 보기</button>
              </ul>
            </div>
            <div className="slideImg">
              <img
                alt="slide04"
                src="https://image.drjart.com/img/008/1595206805240.jpg"
              />
              <ul className="slideTextWrap">
                <li className="titleText">
                  <p>더 예쁜 내일을 위한</p>
                  <p>바이옴으로 셀프 홈케어해요♥</p>
                </li>
                <li className="subText">
                  <p>수분 바이옴과 함께하는 셀프 홈케어로</p>
                  <p>민감함은 지우고 촉촉한 피부로 가꿔보세요!</p>
                </li>
                <button className="detailBtn">자세히 보기</button>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="bestProContainer">
          <div className="bestProTitleWrap">
            <p>베스트셀러 TOP5</p>
          </div>
          {maindata.slice(0, 5).map((best) => {
            return <Each key={best.id} data={best} />;
          })}
        </div>
        <div className="subSlider">
          <Slider {...settings}>
            <div className="slideImg">
              <img
                alt="event01"
                src="https://image.drjart.com/img/008/1593566975913.jpg"
              />
              <ul className="slideTextWrap">
                <li className="titleText">
                  <p>Only Drjart.com</p>
                  <p>Membership Chance</p>
                </li>
                <li className="subText">
                  <p>
                    닥터자르트 멤버십만 받을 수 있는 특별 구매 금액대별 사은품
                  </p>
                </li>
                <button className="detailBtn">자세히 보기</button>
              </ul>
            </div>
            <div className="slideImg">
              <img
                alt="event02"
                src="https://image.drjart.com/img/008/1593566624062.jpg"
              />
              <ul className="slideTextWrap">
                <li className="titleText">
                  <p>소중한 고객님의</p>
                  <p>생일을 축하드립니다.</p>
                </li>
                <li className="subText">
                  <p>
                    7월 생일이신 프리미엄 등급 고객님께 수분 바이옴 키트를
                    드립니다.
                  </p>
                </li>
                <button className="detailBtn">자세히 보기</button>
              </ul>
            </div>
          </Slider>
        </div>
        <div className="onlineContainer">
          <div className="onlineTitleWrap">
            <p>온라인 혜택제품</p>
          </div>
          {maindata.slice(5, 10).map((online) => {
            return <Each key={online.id} data={online} />;
          })}
        </div>
        <MainStory mainDatas={maindata} />
        <div className="reviewContainer">
          <div className="reviewTitleWrap">
            <p>베스트 포토리뷰</p>
            <p>고객님들께서 제품 사용 후 남겨주신 베스트 리뷰를 확인하세요.</p>
          </div>
          <Review data={maindata} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
