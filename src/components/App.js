import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {
  // stateのコンストラクタはreducerに移動
  // actionクリエーターで定義

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>value:{props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

//stateとactionをコンポーネントに関連づける
const mapStateToProps = state => ({ value: state.count.value });
const mapDisapatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});
// const = mapDisapatchToProps = ({increment, decrement})
export default connect(mapStateToProps, mapDisapatchToProps)(App);
