import React from "react";
import Nav from "../../Components/Nav/Nav";
import Slider from "react-slick";
import Footer from "../../Components/Footer/Footer";
import "./Main.scss";

class Main extends React.Component {
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
      <div className="mainContainer">
        <Nav />
        <div className="mainSlider">
          <Slider {...settings}>
            <div className="slideImg">
              <img alt="slide01" src="/images/slideimg01.png" />
            </div>
            <div className="slideImg">
              <img alt="slide01" src="/images/slideimg01.png" />
            </div>
            <div className="slideImg">
              <img alt="slide01" src="/images/slideimg01.png" />
            </div>
            <div className="slideImg">
              <img alt="slide01" src="/images/slideimg01.png" />
            </div>
          </Slider>
        </div>
        <div className="mainSlider">
          <Slider {...settings}>
            <div className="slideImg">
              <img
                alt="event01"
                src="https://image.drjart.com/img/008/1593566975913.jpg"
              />
            </div>
            <div className="slideImg">
              <img
                alt="event02"
                src="https://image.drjart.com/img/008/1593566624062.jpg"
              />
            </div>
          </Slider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
