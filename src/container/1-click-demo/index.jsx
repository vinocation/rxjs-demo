import { React, Component } from "react";
import { fromEvent } from "rxjs";
import { take } from "rxjs/operators";

class ClickDemo extends Component {
  constructor() {
    super();
    this.state = {
      onceClick: false,
    };
  }

  //   onClick = () => {
  //     this.setState({ onceClick: true });
  //   };

  componentDidMount() {
    this.subscription = fromEvent(document.getElementById("onceBtn"), "click")
      .pipe(take(1))
      .subscribe(() => {
        this.setState({ onceClick: true });
        console.log("only click once.");
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <button
        id="onceBtn"
        disabled={this.state.onceClick}
        onClick={this.onClick}
      >
        Click Once
      </button>
    );
  }
}

export default ClickDemo;
