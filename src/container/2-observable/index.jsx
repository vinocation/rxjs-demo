import { React, Component } from "react";
import { from } from "rxjs";
import { map, filter } from "rxjs/operators";

class ObservableDemo extends Component {
  componentDidMount() {
    this.subscription = from([1, 2, 3, 4, 5])
      .pipe(map((ele) => ele * 2))
      .pipe(filter((ele) => ele > 4))
      .subscribe((value) => {
        console.log(value);
      });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return <p>observable and operators</p>;
  }
}

export default ObservableDemo;
