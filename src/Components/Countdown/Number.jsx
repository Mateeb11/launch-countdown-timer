import { useEffect, useState } from "react";
import classes from "./Number.module.scss";

export default function Number({ number, type }) {
  const [c, setC] = useState();

  useEffect(() => {
    console.log(type);

    setTimeout(() => {
      setC(`${classes.number}`);
    }, 1000);
    setC(`${classes.nothing}`);
  }, [number]);

  return (
    <div>
      <p className={c}>{number}</p> <p>{type}</p>
    </div>
  );
}
