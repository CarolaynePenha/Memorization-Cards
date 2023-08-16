export default function CardsFront(props) {
  return (
    <>
      <section key={props.index} className="card">
        <button className={`card-front`}>
          <p> pergunta {props.index}</p>
          <ion-icon
            onClick={() => props.changeCards("questions")}
            name="play-outline"
          ></ion-icon>
        </button>
      </section>
    </>
  );
}
