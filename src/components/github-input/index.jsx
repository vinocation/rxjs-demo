import { Component } from "react";

class GithubInput extends Component {
  constructor() {
    super();
    this.state = {
      fetchText: "",
    };
  }


 
  onChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return <input type="text" onKeyUp={this.onChange}></input>;
  }
}

export default GithubInput;
