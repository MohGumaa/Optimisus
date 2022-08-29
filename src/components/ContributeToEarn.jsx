import { bill } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const ContributeToEarn = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily Contribute To Earn</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The contribute-to-earn concept will allow creators to write and be
        compensated for their contributions to the website and the crypto
        community.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        This is the first time such a concept has been introduced in the
        cryptocurrency space. We provide freshers or people who want to pursue
        careers in the writing industry but are not expert writers or lack the
        necessary writing skills with the opportunity to write and build their
        portfolio and skills.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        In an industry where people only look for experts, we believe that
        anyone deserves a chance. After all, these experts were once beginners
        who were given a chance.
      </p>
      <Button
        styles={`mt-10`}
        text="Get Started"
        destinations={"https://www.optimisus.com"}
      />
    </div>
  </section>
);

export default ContributeToEarn;
