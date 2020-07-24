import React from "react";
import Each from "./Each.js";
import API_URL from "../../../Config.js";
import "./Product.scss";
import { withRouter } from "react-router-dom";

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

  sortDatas = (e) => {
    e.stopPropagation();
    const { productDatas } = this.state;
    const priceObj = {
      "낮은 금액 순": "price",
      "높은 금액 순": "price",
      // "인기 순": "comments", API 데이터 들어오면 추가 예정
      // "신상품 순": "date", API 데이터 들어오면 추가 예정
    };

    let newData = productDatas.sort((a, b) => {
      if (e.target.value === "낮은 금액 순") {
        return a[priceObj[e.target.value]] - b[priceObj[e.target.value]];
      }
      return b[priceObj[e.target.value]] - a[priceObj[e.target.value]];
    });

    this.setState({
      isClicked: false,
      curCategoryValue: e.target.value,
      productDatas: newData,
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
                          onClick={(e) => this.sortDatas(e)}
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
            return <Each key={data.id} data={data} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
