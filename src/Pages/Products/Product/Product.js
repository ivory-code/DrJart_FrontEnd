import React from "react";
import Each from "./Each.js";
import Nav from "../../../Components/Nav/Nav.js";
import Footer from "../../../Components/Footer/Footer.js";
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
    fetch(`${API_URL}/product/all`, {
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
    const { value } = e.target;
    const priceObj = {
      "낮은 금액 순": "product_detail__price",
      "높은 금액 순": "product_detail__price",
      "인기 순": "star__star_5",
      "신상품 순": "created",
    };
    let newData = productDatas.sort((a, b) => {
      if (value === "낮은 금액 순") {
        return a[priceObj[value]] - b[priceObj[value]];
      } else if (value === "신상품 순") {
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      }
      return b[priceObj[value]] - a[priceObj[value]];
    });

    this.setState({
      isClicked: false,
      curCategoryValue: value,
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
      <>
        <Nav />
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
        <Footer />
      </>
    );
  }
}

export default withRouter(Product);
