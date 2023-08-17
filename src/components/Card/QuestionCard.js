import RoundArrow from "./../../assets/round.svg";

export default function QuestionCard(props) {
  return (
    <section className="card">
      <button className="question">
        <p>{props.question}</p>
        <img src={RoundArrow} onClick={() => props.changeCards("answer")} />
      </button>
    </section>
  );
}
