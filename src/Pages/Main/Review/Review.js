import React from "react";
import "./Review.scss";

class Review extends React.Component {
  render() {
    return (
      <div className="Review">
        <div className="reviewWrap">
          {Array(4)
            .fill()
            .map((_, i) => {
              return (
                <div className="reviewContent" key={i}>
                  <img alt="review01" src="/images/review01.jpg" />
                  <div className="reviewInfo">
                    <p className="reviewTitle">화이팅</p>
                    <p className="reviewDate">
                      <span>ivorycode</span>
                      <span>&nbsp;｜&nbsp;</span>
                      <span>2020.07.21</span>
                    </p>
                  </div>
                  <div className="reviewItem">
                    <img alt="reviewItem01" src="/images/reviewItem01.png" />
                    <p className="itemName">바이옴 클렌저</p>
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
