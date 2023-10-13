import { useEffect, useState } from "react";
import classes from "./Number.module.scss";

export default function Number({ number, type }) {
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    setFlip(true);

    setTimeout(() => {
      setFlip(false);
    }, 1500);
  }, [number]);

  return (
    <div className={`${flip && classes.flip}`}>
      <div className={`${classes.container} `}>
        <div className={classes.numberContainer}>
          <p className={classes.number}>{number}</p>
        </div>
        <p className={classes.countdownText}>{type}</p>
      </div>
    </div>
  );
}
