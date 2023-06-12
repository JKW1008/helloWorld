import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("Render");
  });

  useEffect(() => {
    console.log("Render + Empty Value");
  }, []);

  useEffect(() => {
    console.log("Render + Count State Change");
  }, [count]);

  useEffect(() => {
    console.log("Render + Input State Change");
  });

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <button onClick={handleCountUpdate}>Update</button>
      <br />
      <span>Input Text : {input}</span>
    </div>
  );
}

export default App;
