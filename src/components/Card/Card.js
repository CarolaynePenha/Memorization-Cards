import React from "react";
import CardsFront from "./CardFront";
import QuestionCard from "./QuestionCard";
import AnswerCard from "./AnswerCard";

export default function Card(props) {
  const [stateOfCard, setStateOfCard] = React.useState("front");
  const [activeCard, setActiveCard] = React.useState(true);

  function changeCards(state) {
    setStateOfCard(state);
  }

  if (stateOfCard === "negative" && activeCard === true) {
    props.Icons({ name: "close-circle-outline", classN: "negative" });
    setActiveCard(false);
  }
  if (stateOfCard === "middle" && activeCard === true) {
    props.Icons({ name: "help-circle-outline", classN: "middle" });
    setActiveCard(false);
  }
  if (stateOfCard === "positive" && activeCard === true) {
    props.Icons({ name: "checkmark-circle-outline", classN: "positive" });
    setActiveCard(false);
  }

  if (stateOfCard === "questions") {
    return (
      <QuestionCard changeCards={changeCards} question={props.card.question} />
    );
  }
  if (stateOfCard === "front") {
    return (
      <CardsFront
        index={props.index}
        changeCards={changeCards}
        disable={false}
      />
    );
  }
  if (stateOfCard === "answer") {
    return <AnswerCard answer={props.card.answer} changeCards={changeCards} />;
  }

  if (stateOfCard === "negative") {
    return (
      <CardsFront
        index={props.index}
        class={stateOfCard}
        disabled={true}
        icon={"close-circle-outline"}
      />
    );
  }
  if (stateOfCard === "middle") {
    return (
      <CardsFront
        index={props.index}
        class={stateOfCard}
        disabled={true}
        icon={"help-circle-outline"}
      />
    );
  }
  if (stateOfCard === "positive") {
    return (
      <CardsFront
        index={props.index}
        class={stateOfCard}
        disabled={true}
        icon={"checkmark-circle-outline"}
      />
    );
  }
}
