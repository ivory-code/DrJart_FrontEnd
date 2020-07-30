import React from "react";
import API_URL from "../../Config.js";
import "./Cartlist.scss";

class Cartlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.data.quantity,
      price: this.props.data.price,
      salePrice: this.props.data.price_sale,
    };
  }

  handleCount = (productNum, sign) => {
    fetch(`${API_URL}/user/order${sign === "+" ? "add" : "minus"}`, {
      method: "POST",
      body: JSON.stringify({ product_id: productNum }),
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          count: res.quantity,
          price: res.price,
          salePrice: res.price_sale,
        });
        this.props.setReload();
      });
  };

  deleteItem = (productNum) => {
    fetch(`${API_URL}/user/orderdelete`, {
      method: "POST",
      body: JSON.stringify({ product_id: productNum }),
      headers: {
        Authorization: localStorage.getItem("Kakao_token"),
      },
    }).then((_) => window.location.reload());
  };

  render() {
    const { count, price, salePrice } = this.state;
    const { productId, data } = this.props;
    const isSale = salePrice !== 0;

    return (
      <div className="cartItem" key={productId}>
        <div className="itemInfo">
          <div className="itemImgBox">
            <img alt="cartItem" src={data.image_url} />
          </div>
          <p>
            <span>{data.name}</span>
          </p>
        </div>
        <div className="countItem">
          <div className="quantity">
            <button
              className="minus"
              onClick={() => this.handleCount(productId, "-")}
            >
              <img
                alt=""
                src="https://image.drjart.com/front/ko/images/common/qty_down.gif"
              />
            </button>
            <input className="count" type="text" value={count} readOnly />
            <button
              className="plus"
              onClick={() => this.handleCount(productId, "+")}
            >
              <img
                alt=""
                src="https://image.drjart.com/front/ko/images/common/qty_up.gif"
              />
            </button>
          </div>
        </div>
        <div className="itemCost">
          <p className={`itemprice ${isSale ? "off" : ""}`}>
            {price.toLocaleString()}원
          </p>
          <p className="saleItemPrice">
            <span className={`oriCost ${isSale ? "" : "off"}`}>
              {isSale ? price.toLocaleString() : salePrice.toLocaleString()}원
            </span>
            <span className="disCost">
              {isSale ? salePrice.toLocaleString() : price.toLocaleString()}원
            </span>
          </p>
          <button
            className="delItem"
            onClick={() => this.deleteItem(productId)}
          />
        </div>
      </div>
    );
  }
}

export default Cartlist;
