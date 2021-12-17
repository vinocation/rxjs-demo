import { React, Component } from "react";
import { Subject } from "rxjs";

class SubjectDemo extends Component {
  componentDidMount() {
    const subject = new Subject();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(1);
    subject.next(2);
  }

  componentWillUnmount() {
    this.subject.unsubscribe();
  }

  render() {
    return <div>单播和多播</div>;
  }
}

export default SubjectDemo;
