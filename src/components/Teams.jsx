import { teamMembers } from "../constants";
import styles from "../style";
import TeamCard from "./TeamCard";

const Teams = () => (
  <section
    id="team"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Meet The Creative <br className="sm:block hidden" />
        Team
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Our team is well-seasoned and has a perfect mixture of creativity and
          technical wizardry.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]">
      {teamMembers.map((card) => (
        <TeamCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Teams;
