import React from "react";
import styles from "../style";
import { tokenomics } from "../assets";

const Exchanges = () => (
  <section
    id="exchanges"
    className={`${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <h2 className={styles.heading3}>
      Optimisus <span className="text-gradient">(OPX)</span> Token Distribution!
    </h2>
    <img
      src={tokenomics}
      alt="Optimisus Token"
      className="relative z-[5] mx-auto"
      loading="lazy"
    />
  </section>
);

export default Exchanges;
