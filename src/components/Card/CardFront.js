export default function CardsFront(props) {
  return (
    <>
      <section key={props.index} className="card">
        <button
          disabled={props.disabled}
          className={`card-front ${props.class}`}
        >
          <p> pergunta {props.index + 1}</p>
          {props.disabled ? (
            <ion-icon name={props.icon}></ion-icon>
          ) : (
            <ion-icon
              onClick={() => props.changeCards("questions")}
              name={"play-outline"}
            ></ion-icon>
          )}
        </button>
      </section>
    </>
  );
}
