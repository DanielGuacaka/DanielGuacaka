import React from "react";
import styles from "./Benefits.module.css";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { AiOutlineRise } from "react-icons/ai";
import { FiRepeat } from "react-icons/fi";

const Benefits = () => {
  return (
    <div name="Benefits" className={styles.benefits}>
      <h2 className={styles.benefitTitle}>
        LA MEJOR PAGINA DELO MUNDO PARA EL AUTOCONOCIMIENTO .
      </h2>
      <p>
      Abre tu mente a un mundo nuevo. <BsFillDoorOpenFill />
      </p>
      <p>
      Nuevas Conocimientos, Nuevas personas.
        <FaPeopleCarry />
      </p>
      <p>
        {" "}
        Costos mucho más bajos <FaMoneyBillAlt />
      </p>
      <p>
      Sin horarios        <AiOutlineSchedule />
      </p>
      <img
        className={styles.webImage}
        src={require("../assets/wp7828550.jpg")}
      ></img>

      
      
    </div>
  );
};

export default Benefits;
