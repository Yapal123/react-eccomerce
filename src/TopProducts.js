import React, { Suspense } from "react";
import "./App.css";
const TopProductsRender = React.lazy(() => import("./TopProductsRender"));

class TopProducts extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      counter: 1    
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
    if (this.state.counter * 4 >= this.props.products.length) {
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
      <div className="TP">
      <h2>
        {this.props.title}
      </h2>
        <div>
          <Suspense fallback={<div>loading...</div>}>
            <TopProductsRender
              counter={this.state.counter}
              products={this.props.products}
            />
          </Suspense>
        </div>

        <div>{moreBtn}</div>
      </div>
    );
  }
}
export default TopProducts;
