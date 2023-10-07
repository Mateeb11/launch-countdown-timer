import { useEffect, useState } from "react";
import classes from "./Number.module.scss";

export default function Number({ number, type }) {
  return (
    <div className={classes.container}>
      <div className={classes.numberContainer}>
        <p className={classes.number}>{number}</p>
      </div>
      <p className={classes.countdownText}>{type}</p>
    </div>
  );
}
