import "./App.css";
import Rate from "./components/Rate/Rate";
import { useState } from "react";
import Submit from "./components/Submit/Submit";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rating, setRating] = useState();

  return (
    <>
      {submit ? (
        <Submit rating={rating} />
      ) : (
        <Rate rating={rating} setRating={setRating} setSubmit={setSubmit} />
      )}
    </>
  );
}

export default App;
