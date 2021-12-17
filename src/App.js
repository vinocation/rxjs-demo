import { Tabs } from "antd";
import React from "react";
import "./App.css";
import ClickDemo from "./container/1-click-demo/index.jsx";
import ObservableDemo from "./container/2-observable/index.jsx";
import ObserverDemo from "./container/3-observer/index.jsx";
import SubjectDemo from "./container/4-subject";
import GitHubInput from "./container/5-github-input/index.js";

const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="1">
        <TabPane tab="click-demo" key="1">
          <ClickDemo />
        </TabPane>
        <TabPane tab="observable" key="2">
          <ObservableDemo />
        </TabPane>
        <TabPane tab="observer" key="3">
          <ObserverDemo />
        </TabPane>
        <TabPane tab="subject" key="4">
          <SubjectDemo />
        </TabPane>
        <TabPane tab="input-fetch" key="5">
          <GitHubInput />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
