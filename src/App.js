import React from "react";
import "./App.css";

function App() {
  const[message, setMessage] = React.useState("");
  React.useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
