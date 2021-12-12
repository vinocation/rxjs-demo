import "./App.css";
import GitHubInput from "./components/github-input/index.jsx";
import Counter from "./components/rxjs-count";

function App() {
  return (
    <div className="App">
      <GitHubInput />
      <Counter />
    </div>
  );
}

export default App;
