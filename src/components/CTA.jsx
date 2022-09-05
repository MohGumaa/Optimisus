import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    id="whitepaper"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Optimisus Litepaper</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Here you'll find everything you need to know about Optimisus, the OPX
        Token!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button text="Litepaper" destinations={"https://www.optimisus.com"} />
    </div>
  </section>
);

export default CTA;
