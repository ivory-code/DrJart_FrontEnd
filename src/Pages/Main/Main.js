import React from "react";
import Nav from "../../Components/Nav/Nav";
import MainStory from "./MainStory/MainStory";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import "./Main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Main extends React.Component {
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
                alt="slide03"
                src="https://image.drjart.com/img/008/1593565883862.jpg"
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
                alt="slide04"
                src="https://image.drjart.com/img/008/1595206805240.jpg"
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
          </Slider>
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
          <MainStory />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
