import { Component } from "react";
import { fromEvent, from } from "rxjs";
import { filter, take } from "rxjs/operators";

class GithubInput extends Component {
  onChange = (e) => {
    console.log("eventBind:", e.target.value);
  };

  componentDidMount() {
    const range = from([1, 2, 3, 4, 5]);
    // 创建发出点击事件的 observable
    const source = fromEvent(document.getElementById("miranda"), "input");
    // filter
    const filterSource = source.pipe(filter((e) => e.target.value.length > 2));
    // take
    const takeSource = source.pipe(take(5));
    takeSource.subscribe((x) => console.log("rxjs:", x.target.value));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <input
        type="text"
        id="miranda"
        //  onKeyUp={this.onChange}
      ></input>
    );
  }
}

export default GithubInput;
