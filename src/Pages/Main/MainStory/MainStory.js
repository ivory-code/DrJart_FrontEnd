import React from "react";
import Slider from "react-slick";
import "./MainStory.scss";

class MainStory extends React.Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="MainStory">
        <div className="mainStory">
          <div className="storyInfo">
            <p className="storySubTitle">NEW PRODUCT STORY</p>
            <p className="storyMainTitle">태양에 맞서는 강력한 차단의 힘</p>
            <p className="storyCaption">
              지구의 솔라스트레스에 맞서는
              <br />
              #우주선 크림 솔라바이옴의
              <br />
              강력한 피부보호막을 경험해보세요.
            </p>
            <button className="goStoryBtn">자세히 보기</button>
          </div>
          <div className="storyVideo"></div>
        </div>
        <div className="storySlide">
          <div className="storySlider">
            <Slider {...settings}></Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default MainStory;
