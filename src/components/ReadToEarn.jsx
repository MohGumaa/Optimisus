import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ReadToEarn = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2Sm}>Read To Earn</h2>
      <p className={`${styles.paragraphSm} max-w-[470px] mt-5`}>
        We're not just providing you with the latest news on crypto, but we're
        also offering you a way to make money while reading and learning. By
        reading articles, readers earn tokens for their time. The more they
        read, the more they are rewarded with an income.
      </p>
      <p className={`${styles.paragraphSm} max-w-[470px] mt-5`}>
        This new <strong>read-and-earn</strong> model is designed to help users
        make money by doing something they love—reading about the latest
        developments in the world of crypto and blockchain. In addition to
        earning an income, readers will also be kept up-to-date on all the
        latest news and developments in this rapidly-growing industry.
      </p>

      <Button
        styles={`mt-10`}
        text="Get Started"
        destinations={"https://www.optimisus.com"}
      />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default ReadToEarn;
