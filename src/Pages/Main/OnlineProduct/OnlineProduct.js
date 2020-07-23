import React from "react";
import "./OnlineProduct.scss";

class OnlineProduct extends React.Component {
  render() {
    const { mainData } = this.props;
    return (
      <div className="OnlineProduct">
        <div className="onlineProWrap">
          {mainData.slice(6, 11).map((online, i) => {
            return (
              <div className="onlineProContent" key={i}>
                <img alt="onlinePro01" src={online.image_url} />
                <div className="onlineProInfo">
                  <p className="onlineProTitle">{online.name}</p>
                  <p className="onlineProDate">
                    <span>{online.tag}</span>
                  </p>
                </div>
                <div className="onlineProItem">
                  <p className="itemName">
                    <span className={online.price_sale ? "saleOn " : "saleOff"}>
                      {online.price_sale !== 0
                        ? online.price.toLocaleString()
                        : online.price_sale.toLocaleString()}
                      원
                    </span>
                    <span>
                      {online.price
                        ? online.price_sale.toLocaleString() !== 0
                          ? `${online.price_sale.toLocaleString()}원`
                          : `${online.price.toLocaleString()}원`
                        : null}
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

export default OnlineProduct;
