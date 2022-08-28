import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const EditToEarn = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better earn deal <br className="sm:block hidden" /> in Edit To
        Earn
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Users who have high skills in writing and editing can also edit other
        users’ articles and earn tokens in return.
      </p>

      <Button styles={`mt-10`} destinations={"https://www.optimisus.com"} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default EditToEarn;
