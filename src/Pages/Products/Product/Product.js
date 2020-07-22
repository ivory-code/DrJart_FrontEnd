import React from "react";
import Each from "./Each.js";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      isLoading: true,
      checked: "인기 순",
      datas: [],
    };
  }

  componentDidMount() {
    this.getProductDatas();
  }

  getProductDatas = () => {
    fetch("http://14.138.117.141:8000/product/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          datas: result.data,
          isLoading: false,
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
      checked: e.target.innerText,
    });
  };

  render() {
    const { isClicked, isLoading, datas } = this.state;
    const { handleClickList, handleMoustLeave } = this;
    return (
      <>
        <div className={isLoading ? "loaderOn" : "loaderOff"}>
          <div className="loaderImg"></div>
        </div>
        <div className="Product">
          <header className="productHeader">
            <h2>모든제품</h2>
            <div className="filterList">
              <button
                className={isClicked ? "filterListBtnOff" : "filterListBtnOn"}
                onClick={handleClickList}
                onMouseLeave={handleMoustLeave}
              >
                {this.state.checked}
                <ul
                  onClick={handleClickList}
                  className={isClicked ? "filterListOn" : "filterListOff"}
                >
                  <li>
                    <input type="radio" name="prd_order" value="인기 순" />
                    <label onClick={this.handleRadioBtn}>인기 순</label>
                  </li>
                  <li>
                    <input type="radio" name="prd_order" value="신상품 순" />
                    <label onClick={this.handleRadioBtn}>신상품 순</label>
                  </li>
                  <li>
                    <input type="radio" name="prd_order" value="낮은 금액 순" />
                    <label onClick={this.handleRadioBtn}>낮은 금액 순</label>
                  </li>
                  <li>
                    <input type="radio" name="prd_order" value="높은 금액 순" />
                    <label onClick={this.handleRadioBtn}>높은 금액 순</label>
                  </li>
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
                  newTag={data.fleg_new}
                  bestTag={data.fleg_best}
                  giftTag={data.fleg_gift}
                  saleTag={data.fleg_sale}
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
