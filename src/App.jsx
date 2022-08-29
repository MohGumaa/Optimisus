import React from "react";
import styles from "./style";
import {
  Navbar,
  ContributeToEarn,
  EditToEarn,
  ReadToEarn,
  Clients,
  CTA,
  Stats,
  Footer,
  Teams,
  Hero,
  About,
  Exchanges,
} from "./components";

const App = () => (
  <div className="bg-black w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <About />
        <ReadToEarn />
        <ContributeToEarn />
        <EditToEarn />
        <Exchanges />
        <Teams />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
