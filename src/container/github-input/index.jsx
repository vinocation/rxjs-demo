import { Component } from "react";
import { fromEvent, from } from "rxjs";
import { filter, take } from "rxjs/operators";
import { getRepos } from "./index.js";
import style from "./index.module.css";

class GithubInput extends Component {
  onChange = (e) => {
    // 常规event绑定
    console.log("eventBind:", e.target.value);
  };

  componentDidMount() {
    // 创建observable
    const range = from([1, 2, 3, 4, 5]);
    // 创建发出点击事件的 observable
    const source = fromEvent(document.getElementById("search-btn"), "input");

    // 操作符
    // filter
    const filterSource = source.pipe(filter((e) => e.target.value.length > 2));
    // take
    const takeSource = source.pipe(take(5));

    // 订阅器
    takeSource.subscribe((x) => console.log("take log", x.target.value));

    //
    const keyUpSource = fromEvent(
      document.getElementById("search-btn"),
      "keyup"
    )
      .map((e) => e.target.value)
      .filter((text) => !!text)
      .do((value) => console.log(value))
      // 调用 getRepos 方法将返回一个 Observable
      // flatMap 则将所有 Observable 合并，转为一个 Observable
      .flatMap(getRepos);

    keyUpSource.subscribe((x) => console.log(x));
  }

  componentWillUnmount() {
    // 卸载observable订阅
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
