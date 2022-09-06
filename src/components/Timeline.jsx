import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../style";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

export default function App() {
  return (
    <section id="roadmap" className="sm:py-24 py-6">
      <h2 className={`${styles.heading2} text-gradient text-center`}>
        Roadmap
      </h2>
      <p className={`${styles.paragraph} mt-5 mb-16 text-center`}>
        We are driven by the vision to give back to the crypto community.
      </p>
      <div className="bdr-relative"></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: false,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-1">
            2022 - Q4
          </h4>
          <ul className="font-poppins font-normal text-dimWhite text-[15px] leading-[30px] mt-5">
            <li>Published Litepaper</li>
            <li>Website is now live</li>
            <li>Seed round</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-1">
            2023 - Q1
          </h4>
          <ul className="font-poppins font-normal text-dimWhite text-[15px] leading-[30px] mt-5">
            <li>Build the team</li>
            <li>Marketing</li>
            <li>Private sales</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-1">
            2023 - Q2
          </h4>
          <ul className="font-poppins font-normal text-dimWhite text-[15px] leading-[30px] mt-5">
            <li>Public sales</li>
            <li>Upgrade Optimisus website</li>
            <li>Launch Beta version of the platform</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-1">
            2023 - Q3
          </h4>
          <ul className="font-poppins font-normal text-dimWhite text-[15px] leading-[30px] mt-5">
            <li>Build OPX Android and iOS wallets</li>
            <li>Optimisus iOS and Android apps</li>
            <li>Token Issuance</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-1">
            2023 - Q4
          </h4>
          <ul className="font-poppins font-normal text-dimWhite text-[15px] leading-[30px] mt-5">
            <li>List OPX Token on exchanges</li>
            <li>Optimisus crypto events</li>
            <li>Improve Security</li>
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <h4 className="font-poppins font-semibold text-white text-[24px] leading-[23.4px] mb-1">
            2024 - Q1
          </h4>
          <ul className="font-poppins font-normal text-dimWhite text-[15px] leading-[30px] mt-5">
            <li>Optimisus in the Metaverse</li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
