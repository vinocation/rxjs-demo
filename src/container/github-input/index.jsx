import { Component } from "react";
import { fromEvent, from } from "rxjs";
import { filter, take } from "rxjs/operators";
import style from "./index.module.css";

class GithubInput extends Component {
  onChange = (e) => {
    console.log("eventBind:", e.target.value);
  };

  componentDidMount() {
    const range = from([1, 2, 3, 4, 5]);
    // 创建发出点击事件的 observable
    const source = fromEvent(document.getElementById("search-btn"), "input");
    // filter
    const filterSource = source.pipe(filter((e) => e.target.value.length > 2));
    // take
    const takeSource = source.pipe(take(5));
    takeSource.subscribe((x) => console.log("take log", x.target.value));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <div className={style.header}>
          <input
            className={style.search}
            id="search-btn"
            type="text"
            maxLength="1000"
            required=""
            placeholder="search in github"
            //  onKeyUp={this.onChange}
          />
        </div>
      </div>
    );
  }
}

export default GithubInput;
