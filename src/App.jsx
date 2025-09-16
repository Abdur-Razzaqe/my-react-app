import Counter from "./counter";
import Batsman from "./batsman";
import "./App.css";

function App() {
  function handleClick() {
    alert("I am Clicked");
  }

  const handleClick3 = () => {
    alert("clicked3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick() {
          alert("clicked-2");
        }}
      >
        Click Me
      </button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert("click-4")}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Click me 5</button>
    </>
  );
}

export default App;
