import React from "react";
import "./BestProduct.scss";

class BestProduct extends React.Component {
  render() {
    const { mainData } = this.props;
    return (
      <div className="BestProduct">
        <div className="bestProWrap">
          {mainData.slice(0, 5).map((best, i) => {
            return (
              <div className="bestProContent" key={i}>
                <img alt="bestPro01" src={best.image_url} />
                <div className="bestProInfo">
                  <p className="bestProTitle">{best.name}</p>
                  <p className="bestProDate">
                    <span>{best.tag}</span>
                  </p>
                </div>
                <div className="bestProItem">
                  <p className="itemName">
                    <span className={best.price_sale ? "saleOn " : "saleOff"}>
                      {best.price_sale !== 0
                        ? best.price.toLocaleString()
                        : best.price_sale.toLocaleString()}
                      원
                    </span>
                    <span>
                      {best.price
                        ? best.price_sale !== 0
                          ? `${best.price_sale.toLocaleString()}원`
                          : `${best.price.toLocaleString()}원`
                        : "일시품절"}
                    </span>
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

export default BestProduct;
