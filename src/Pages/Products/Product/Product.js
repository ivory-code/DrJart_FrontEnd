import React from "react";
import Each from "./Each.js";
import API_URL from "../../../Config.js";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      categories: ["인기 순", "신상품 순", "낮은 금액 순", "높은 금액 순"],
      curCategoryValue: "인기 순",
      productDatas: [],
    };
  }

  componentDidMount() {
    this.getProductDatas();
  }

  getProductDatas = () => {
    fetch(`http://${API_URL}/product/all`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          productDatas: result.data,
        });
      });
  };

  render() {
    const {
      isClicked,
      productDatas,
      categories,
      curCategoryValue,
    } = this.state;

    return (
      <div className="Product">
        <header className="productHeader">
          <h2>모든제품</h2>
          <div className="filterListBtnBox">
            <button
              className={`filterListBtn ${isClicked ? "On" : "Off"}`}
              onClick={(e) => {
                e.stopPropagation();
                this.setState({
                  isClicked: true,
                });
              }}
              onMouseLeave={() => this.setState({ isClicked: false })}
            >
              {curCategoryValue}
              <ul className={isClicked ? "filterListOn" : "filterListOff"}>
                {categories.map((el) => {
                  return (
                    <li key={el}>
                      <label>
                        <input
                          type="radio"
                          value={el}
                          onClick={(e) => {
                            e.stopPropagation();
                            this.setState({
                              isClicked: false,
                              curCategoryValue: e.target.value,
                            });
                          }}
                        />
                        {el}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </button>
          </div>
        </header>
        <div className="productWrapper">
          {productDatas.map((data) => {
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
    );
  }
}

export default Product;
