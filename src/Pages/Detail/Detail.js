import React from "react";
import Nav from "../../Components/Nav/Nav.js";
import Footer from "../../Components/Footer/Footer.js";
import API_URL from "../../Config.js";
import Slider from "react-slick";
import "./Detail.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      preview: [],
      review: [],
      html: [],
      id: [],
    };
  }

  componentDidMount() {
    fetch(`http://${API_URL}/product/detail/1`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          preview: result.images,
          review: result.reviews,
          html: result.data,
          id: result.id,
        });
      });
  }

  render() {
    const settings = {
      customPaging: function (i) {
        return (
          <div className="detailImg">
            <img alt="sliderImg" src={`preview[0].image_url${i}`} />
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
    const { preview, html, review } = this.state;
    return (
      <div className="Detail">
        <Nav />
        <div className="detailWrap">
          <Slider {...settings}>
            <div className="detailImg">
              <img
                alt="sliderImg"
                src={preview.length ? preview[0].image_url1 : null}
              />
            </div>
            <div className="detailImg">
              <img
                alt="sliderImg"
                src={preview.length ? preview[0].image_url2 : null}
              />
            </div>
            <div className="detailImg">
              <img
                alt="sliderImg"
                src={preview.length ? preview[0].image_url3 : null}
              />
            </div>
            <div className="detailImg">
              <img
                alt="sliderImg"
                src={preview.length ? preview[0].image_url4 : null}
              />
            </div>
          </Slider>
        </div>
        <div className="detailReview">
          <p className="detailScore">
            <span>리뷰평점 5.0</span>&nbsp;
            <span>★★★★★</span>
          </p>
          <div className="detailRevImg">
            {review.slice(0, 6).map((rev, i) => {
              return (
                <div className="revImg" key={i}>
                  <img
                    alt="revImg"
                    src={review.length ? review[i].image_url : null}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="detailInfo"
            dangerouslySetInnerHTML={
              html.length ? { __html: html[0].detail_html } : null
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
