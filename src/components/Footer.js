import Party from "./../assets/party.png";
import Sad from "./../assets/sad.png";
export default function Footer({ aswrIcons, cardsLength }) {
  const length = aswrIcons.length === cardsLength;
  let negativeClass;
  let result = "";
  if (length) {
    result = "result";
    negativeClass = aswrIcons.filter((icon) => {
      return icon.classN === "negative";
    });
  }

  return (
    <footer className={result}>
      {length ? (
        negativeClass.length !== 0 ? (
          <>
            <div className="title-result">
              <strong> Poxa! </strong>
              <img src={Sad} alt="emoji-sad" />
            </div>

            <p>Ainda faltam alguns... Mas não desanime!</p>
          </>
        ) : (
          <>
            <div className="title-result">
              <strong> Parabéns! </strong>
              <img src={Party} alt="emoji-party" />
            </div>

            <p>Você não esqueceu de nenhum flashcard!</p>
          </>
        )
      ) : (
        <></>
      )}
      <p>{aswrIcons.length}/7 </p>
      <div className="icons">
        {aswrIcons.map((icon, index) => (
          <div className={icon.classN}>
            <ion-icon
              className={icon.classN}
              key={index}
              name={icon.name}
            ></ion-icon>
          </div>
        ))}
      </div>
    </footer>
  );
}
