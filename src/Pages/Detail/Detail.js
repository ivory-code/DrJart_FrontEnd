import React from "react";
import Slider from "react-slick";
import Nav from "../../Components/Nav/Nav.js";
import DetailNav from "./DetailNav.js";
import Footer from "../../Components/Footer/Footer.js";
import throttle from "../../Util/throttle.js";
import API_URL from "../../Config.js";
import "./Detail.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: [],
      review: [],
      html: [],
      scrollTop: 0,
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/product/detail/${this.props.match.params.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          preview: result.images,
          review: result.reviews,
          html: result.datas,
        });
      });
    window.addEventListener("scroll", throttle(this.handleScroll, 100));
  }

  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <div className="detailImg">
            <img alt="sliderImg" src={`preview[${i}].image__image_url`} />
          </div>
        );
      },
      dots: false,
      dotsClass: "slick-dots slick-thumb",
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const { preview, html, review, scrollTop } = this.state;

    return (
      <div className="Detail">
        <Nav scrollTop={scrollTop} />
        <div className="detailWrap">
          <Slider {...settings}>
            {preview.map((_, i) => {
              return (
                <div className="detailImg" key={i}>
                  <img
                    alt="sliderImg"
                    src={preview.length && preview[i].image__image_url}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="detailReview">
          <p className="detailScore">
            <span>리뷰평점 5.0</span>&nbsp;
            <span>★★★★★</span>
          </p>
          <div className="detailRevImg">
            {review.slice(0, 6).map((_, i) => {
              return (
                <div className="revImg" key={i}>
                  <img
                    alt="revImg"
                    src={review.length && review[i].image_url}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="detailInfo"
            dangerouslySetInnerHTML={
              html.length
                ? { __html: html[0].product_detail__detail_html }
                : null
            }
          ></div>
        </div>
        <DetailNav scrollTop={scrollTop} />
        <Footer />
      </div>
    );
  }
}

export default Detail;
