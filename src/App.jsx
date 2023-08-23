import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [countDown, setCountDown] = useState();

  let countDownDate = new Date("Sep 6, 2023 12:00:00").getTime();

  let one = setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  }, 1000);

  return <>{countDown}</>;
}

export default App;
