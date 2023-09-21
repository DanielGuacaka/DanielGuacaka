import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>Ya somos acreedores de grandes paginas responsive, con bootsstrap, un poco de react, la mayoria. Damos tutoriales de como crear una pagina web. No tengas miedo a la programacion. Sin mente como el demente</p>
      <img
        className={styles.webImage}
        src={require("../assets/webImage.jpg")}
      ></img>
    </div>
  );
};

export default Services;
