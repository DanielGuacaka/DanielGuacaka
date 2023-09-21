import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>
        Graduate con honores en tecnico<br />
          <b>Desarrollo de sofware</b>
        </p>
        <img
        className={styles.webImage}
        src={require("../assets/hacker-with-laptop-922359280-5c32d4a546e0fb00011bb991.jpg")}
      ></img>
        <p>
        con las mejores herramientas desde computadores <br />
          <b>Hasta tablets gamers.</b>
        </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Contactos.
        </Link>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
Consigue una Titulacion.   </Link>
      </div>
    </div>
  );
};

export default Home;
