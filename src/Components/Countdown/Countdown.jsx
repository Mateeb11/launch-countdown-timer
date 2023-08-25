import classes from "./Countdown.module.scss";

import { useState } from "react";

export default function Countdown() {
  const [countDown, setCountDown] = useState({});

  let countDownDate = new Date("Sep 6, 2023 12:00:00").getTime();

  setInterval(() => {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDown({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }, 1000);
  return <>{countDown.seconds}</>;
}
