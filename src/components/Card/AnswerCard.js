export default function AnswerCard(props) {
  return (
    <section className="card">
      <button className="answer">
        <p>{props.answer}</p>
        <div className="options">
          <button
            onClick={() => props.changeCards("negative")}
            className="negative-option"
          >
            <p> Não lembrei</p>
          </button>
          <button
            onClick={() => props.changeCards("middle")}
            className="middle-option"
          >
            <p> Quase não lembrei</p>
          </button>
          <button
            onClick={() => props.changeCards("positive")}
            className="positive-option"
          >
            <p> Lembrei!! </p>
          </button>
        </div>
      </button>
    </section>
  );
}
