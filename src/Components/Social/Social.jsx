import classes from "./Social.module.scss";

import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

export default function Social() {
  return (
    <div className={classes.container}>
      <img src={facebook} alt="Facebook icon" />
      <img src={pinterest} alt="Pinterest icon" />
      <img src={instagram} alt="Instagram icon" />
    </div>
  );
}
