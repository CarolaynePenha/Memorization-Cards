import StartWindow from "./StartWindow";
import DeckOfQuestions from "./Card/DeckOfCards";
import Header from "./Header";
import React from "react";

function App() {
  const [start, setStart] = React.useState("home");
  function chooseWindow() {
    setStart("CardsFront");
  }
  if (start === "home") {
    return (
      <div className="App">
        <StartWindow chooseWindow={chooseWindow} />
      </div>
    );
  }
  if (start === "CardsFront") {
    return (
      <div className="App">
        <Header />
        <DeckOfQuestions />
      </div>
    );
  }
}

export default App;
