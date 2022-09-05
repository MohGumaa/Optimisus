import { quotes, twitter, linkedin } from "../assets";

const TeamCard = ({ content, name, title, img, linkedURL, twitterURL }) => (
  <div className="flex justify-between flex-col px-4 py-4 rounded-[20px]  max-w-[100%] sm:max-w-[275px]  md:mr-2 sm:mr-1 mr-0 my-5 feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[14px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[18px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite">
          {title}
        </p>
        <div className="flex flex-row mt-2">
          <img
            src={linkedin}
            alt={name}
            className={`w-[20px] object-contain cursor-pointer rounded-full mr-6`}
            onClick={() => window.open(linkedURL)}
          />
          <img
            src={twitter}
            alt={name}
            className={`w-[20px] object-contain cursor-pointer rounded-full`}
            onClick={() => window.open(twitterURL)}
          />
        </div>
      </div>
    </div>
  </div>
);

export default TeamCard;
