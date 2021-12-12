import { Component } from "react";
import { of, from } from "rxjs";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.subscription = from(["miranda", "monica"]).subscribe(
      (value) => {
        console.log(value);
        this.setState({ count: value });
      },
      () => {
        console.log("complete");
      }
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return <div> {this.state.count}</div>;
  }
}

export default Counter;
