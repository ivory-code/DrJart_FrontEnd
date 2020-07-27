import React from "react";
import Slider from "react-slick";
import "./MainStory.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MainStory extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { mainData } = this.props;

    return (
      <div className="MainStory">
        <div className="mainStory">
          <div className="storyInfo">
            <p className="subTitle">NEW PRODUCT STORY</p>
            <p className="mainTitle">태양에 맞서는 강력한 차단의 힘</p>
            <p className="caption">
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
          <Slider {...settings}>
            {mainData.slice(0, 11).map((story, i) => {
              return (
                <div className="storyProContent" key={i}>
                  <img alt="storyPro01" src={story.main_image_url} />
                  <div className="storyProInfo">
                    <p className="storyProTitle">{story.name}</p>
                    <p className="storyProDate">
                      <span>{story.product_detail__tag}</span>
                    </p>
                  </div>
                  <div className="storyProItem">
                    <p className="itemName">
                      <span>
                        {story.product_detail__price.toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default MainStory;
