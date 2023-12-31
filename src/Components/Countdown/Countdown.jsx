import classes from "./Countdown.module.scss";

import { useState } from "react";

import Number from "./Number";
import { Title } from "../Title/Title";

export default function Countdown() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let countDownDate = new Date("Oct 31, 2023 12:00:00").getTime();

  setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
      setDays("00");
      setHours("00");
      setMinutes("00");
      setSeconds("00");
    } else {
      let d = Math.floor(distance / (1000 * 60 * 60 * 24));
      let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((distance % (1000 * 60)) / 1000);

      d != days && setDays(d);
      h != hours && setHours(h);
      m != minutes && setMinutes(m);
      s != seconds && setSeconds(s);
    }
  }, 1000);
  return (
    <div className={classes.container}>
      <Title></Title>
      <div className={classes.countdown}>
        <Number number={days} type={"DAYS"}></Number>
        <Number number={hours} type={"HOURS"}></Number>
        <Number number={minutes} type={"MINUTES"}></Number>
        <Number number={seconds} type={"SECONDS"}></Number>
      </div>
    </div>
  );
}
