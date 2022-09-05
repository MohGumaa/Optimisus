import styles from "../style";

const About = () => (
  <section
    id="about"
    className={`${styles.marginY} ${styles.padding} bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <h2 className={styles.heading2}>
      About <span className="text-gradient">Optimisus</span>!
    </h2>
    <p className={`${styles.paragraphSm}  mt-5`}>
      Optimisus is a media company focusing on crypto, NFT, and blockchain news.
      We provide accurate and timely information to our readers so they can make
      informed decisions about these emerging technologies and the latest
      developments.
    </p>
    <p className={`${styles.paragraphSm}  mt-3`}>
      Our goal is to allow users to earn tokens by reading, writing, editing,
      and engaging with content.
    </p>
    <p className={`${styles.paragraphSm}  mt-3`}>
      The more they engage, the more they are rewarded with an income. You can
      earn up to $50 a day without any experience or qualifications.
    </p>
  </section>
);

export default About;
