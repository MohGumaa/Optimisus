import React from "react";
import styles from "../style";
import { exchangesLogo } from "../constants";
const Exchanges = () => (
  <section
    id="exchanges"
    className={`${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <h2 className={styles.heading2}>
      Optimisus <span className="text-gradient">(OPX)</span> Token Distribution!
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:pt-10 pt-6 my-4">
      {exchangesLogo.map((exchange) => (
        <a
          href={exchange.link}
          key={exchange.id}
          target="_blank"
          className="exchange-logo feature-card"
        >
          <img
            src={exchange.logo}
            alt="exchange_logo"
            className="object-contain"
          />
        </a>
      ))}
    </div>
  </section>
);

export default Exchanges;
