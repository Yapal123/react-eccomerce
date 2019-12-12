import React, { Suspense } from "react";
import "./App.css";
const TopProductsRender = React.lazy(() => import("./TopProductsRender"));

class TopProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      products: [
        {
          title: "Product1",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product2",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product3",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product4",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product5",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product6",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product7",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product8",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product9",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product10",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product11",
          price: 199,
          img: "/public/img/prod.png"
        },
        {
          title: "Product12",
          price: 199,
          img: "/public/img/prod.png"
        }
      ]
    };
    this.moreHandle = this.moreHandle.bind(this);
    this.lessHandle = this.lessHandle.bind(this);
  }
  moreHandle() {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.state.counter);
  }
  lessHandle() {
    this.setState({
      counter: 1
    });
    console.log(this.state.counter);
  }

  render() {
    let moreBtn;
    if (this.state.counter * 4 >= this.state.products.length) {
      moreBtn = (
        <div className="moreBtn" onClick={this.lessHandle}>
          LESS
        </div>
      );
    } else {
      moreBtn = (
        <div className="moreBtn" onClick={this.moreHandle}>
          MORE
        </div>
      );
    }
    return (
      <div>
        <div>
          <Suspense fallback={<div>loading...</div>}>
            <TopProductsRender
              counter={this.state.counter}
              products={this.state.products}
            />
          </Suspense>
        </div>

        <div>{moreBtn}</div>
      </div>
    );
  }
}
export default TopProducts;
