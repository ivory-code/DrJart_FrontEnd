import React from "react";
import Each from "./Each.js";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      checked: "인기 순",
      datas: [],
    };
  }

  componentDidMount() {
    this.getProductDatas();
  }

  getProductDatas = () => {
    fetch("http://10.58.6.110:8000/product/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          datas: result.data,
        });
      });
  };

  handleClickList = (e) => {
    e.stopPropagation();
    this.setState({
      isClicked: true,
    });
  };

  handleMoustLeave = () => {
    this.setState({
      isClicked: false,
    });
  };

  handleRadioBtn = (e) => {
    this.setState({
      checked: e.target.value,
    });
  };

  render() {
    const { isClicked, datas, checked } = this.state;
    const { handleClickList, handleMoustLeave } = this;
    return (
      <>
        <div className="Product">
          <header className="productHeader">
            <h2>모든제품</h2>
            <div className="filterList">
              <button
                className={isClicked ? "filterListBtnOff" : "filterListBtnOn"}
                onClick={handleClickList}
                onMouseLeave={handleMoustLeave}
              >
                {checked}
                <ul className={isClicked ? "filterListOn" : "filterListOff"}>
                  {["인기 순", "신상품 순", "낮은 금액 순", "높은 금액 순"].map(
                    (el, i) => {
                      return (
                        <li key={i}>
                          <input type="radio" name="prd_order" />
                          <label
                            onClick={(e) =>
                              this.setState({
                                isClicked: false,
                                checked: e.target.innerText,
                              })
                            }
                          >
                            {el}
                          </label>
                        </li>
                      );
                    }
                  )}
                </ul>
              </button>
            </div>
          </header>
          <div className="productWrapper">
            {datas.map((data) => {
              return (
                <Each
                  key={data.name}
                  name={data.name}
                  imgSrc={data.image_url}
                  newFlag={data.fleg_new}
                  bestFlag={data.fleg_best}
                  giftFlag={data.fleg_gift}
                  saleFlag={data.fleg_sale}
                  tag={data.tag}
                  salePrice={data.price_sale}
                  price={data.price}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Product;
