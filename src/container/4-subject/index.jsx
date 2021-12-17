import { React, Component } from "react";
import { fromEvent } from "rxjs";
import { Subject } from "rxjs";

class SubjectDemo extends Component {
  componentDidMount() {
    //   const source1 = fromEvent(document.getElementById('textInput'), 'input')
    //   const source2 = fromEvent(document.getElementById('numInput'), 'input')

    const subject = new Subject();

    // subscriber 1
    subject.subscribe((data) => {
      console.log("subjectID:" + data);
    });
    // subscriber 2
    subject.subscribe((data) => {
      console.log("subjectID:" + data);
    });
  }

  componentWillUnmount() {
    this.subject.unsubscribe();
  }

  render() {
    return (
      <div>
        <input type="text" id="textInput" />
        <input type="number" id="numInput" />
      </div>
    );
  }
}

export default SubjectDemo;
