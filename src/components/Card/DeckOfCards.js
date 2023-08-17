import Footer from "../Footer";
import Card from "./Card";
import React from "react";

export default function DeckOfQuestions() {
  function comparator() {
    return Math.random() - 0.5;
  }

  const cards = [
    {
      question: "O que é React?",
      answer: " uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda__",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos para __",
      answer: "passar diferentes informações para componentes ",
    },
    {
      question: "Para que usamos estado (state)?",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  const cardsLength = cards.length;
  const sortCards = cards.sort(comparator);

  const [aswrIcons, setaswrIcons] = React.useState([]);

  function Icons(icon) {
    setaswrIcons([...aswrIcons, icon]);
  }

  return (
    <>
      {sortCards.map((card, index) => (
        <Card key={index} card={card} index={index} Icons={Icons} />
      ))}
      <Footer aswrIcons={aswrIcons} cardsLength={cardsLength} />
    </>
  );
}
