import { React, Component } from "react";
import { from, fromEvent, interval } from "rxjs";
import { filter, take, map, mergeMapTo } from "rxjs/operators";
import style from "./index.module.css";

class ObservableDemo extends Component {
  onChange = (e) => {
    // 常规event绑定
    console.log("eventBind:", e.target.value);
  };

  componentDidMount() {
    this.subscription = from([1, 2, 3, 4, 5])
      .pipe(map((ele) => ele * 2))
      .pipe(filter((ele) => ele > 4))
      .subscribe((value) => {
        console.log(value);
      });

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
    takeSource.subscribe((x) => console.log("只调用5次:", x.target.value));

    //input
    const keyUpSource = fromEvent(
      document.getElementById("search-btn"),
      "keyup"
    );

    keyUpSource
      .pipe(map((e) => e.target.value))
      .pipe(filter((text) => text.length > 3))
      .subscribe((x) => console.log("只获取length>3 :", x));
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div className={style.mainContainer}>
        <div>
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

export default ObservableDemo;
