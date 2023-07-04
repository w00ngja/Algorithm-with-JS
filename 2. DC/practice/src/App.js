import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "재웅";
  const list = ["우유", "딸기", "바나나"];

  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <ul>
        {list.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
