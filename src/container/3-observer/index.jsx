import { React, Component } from "react";
import { from } from "rxjs";

class ObserverDemo extends Component {
  componentDidMount() {
    this.subscription = from(["miranda", "monica", "pentax"]).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("complete");
      },
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return <div>observer</div>;
  }
}

export default ObserverDemo;
