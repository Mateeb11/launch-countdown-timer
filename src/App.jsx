import "./App.scss";

import Countdown from "./Components/Countdown/CountDown";

import prettyHills from "./assets/pattern-hills.svg";

function App() {
  return (
    <>
      <Countdown></Countdown>
      {/* <img src={prettyHills} alt="hills shape" className="background" hidden /> */}
    </>
  );
}

export default App;
