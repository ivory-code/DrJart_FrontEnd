import React from "react";
import Each from "./Each.js";
import "./Product.scss";

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      checked: "인기 순",
    };
  }

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
    const { isClicked } = this.state;
    const { handleClickList, handleMoustLeave } = this;
    return (
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
          {Array(50)
            .fill()
            .map((_, i) => {
              return <Each key={i} />;
            })}
        </div>
      </div>
    );
  }
}

export default Product;
