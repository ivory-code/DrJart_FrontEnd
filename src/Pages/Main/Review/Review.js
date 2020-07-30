import React from "react";
import API_URL from "../../../Config.js";
import "./Review.scss";

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      review: [],
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
          review: result.reviews,
        });
      });
  };

  render() {
    const { review } = this.state;

    return (
      <div className="Review">
        <div className="reviewWrap">
          {review.map((el, i) => {
            return (
              <div className="reviewContent" key={i}>
                <img
                  alt="review01"
                  src={review.length && review[i].image_url}
                />
                <div className="reviewInfo">
                  <p className="reviewTitle">
                    {el.content.length > 20
                      ? `${el.content.slice(0, 20)}...`
                      : el.content}
                  </p>
                  <p className="reviewDate">
                    <span>ivorycode</span>
                    <span>&nbsp;｜&nbsp;</span>
                    <span>2020.07.21</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Review;
