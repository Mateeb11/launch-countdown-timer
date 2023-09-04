import { useEffect, useState } from "react";
import classes from "./Number.module.scss";

export default function Number({ number, type }) {
  return (
    <div className={classes.container}>
      <p>{number}</p> <p>{type}</p>
    </div>
  );
}
