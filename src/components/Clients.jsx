import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section id="partners" className={`${styles.flexCenter} sm:py-16 py-6 my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <a
          href={client.link}
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[150px] min-w-[120px] m-5`}
          target="_blank"
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain rounded-lg client-logo"
          />
        </a>
      ))}
    </div>
  </section>
);

export default Clients;
