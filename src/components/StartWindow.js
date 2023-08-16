import Logo from "./../assets/logo2.png";

export default function StartWindow(props) {
  return (
    <div className="start-window">
      <img src={Logo} alt="logo" />
      <button onClick={props.chooseWindow}>
        <p>Iniciar estudos!</p>
      </button>
    </div>
  );
}
