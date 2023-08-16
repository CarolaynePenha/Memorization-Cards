import React from "react";
import CardsFront from "./CardsFront";

export default function Card(props) {
  const [questionsCards, setQuestionsCards] = React.useState("front");

  function changeCards(state) {
    setQuestionsCards(state);
  }

  if (questionsCards === "questions") {
    return (
      <section className="card">
        <button>
          <p>{props.card.question}</p>
        </button>
      </section>
    );
  }
  if (questionsCards === "front") {
    return <CardsFront index={props.index} changeCards={changeCards} />;
  }
  if (questionsCards === "answer") {
    return <section className="card">{props.card.answer}</section>;
  }
}
