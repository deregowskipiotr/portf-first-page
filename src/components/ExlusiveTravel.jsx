import { expCards } from "../constants/index.js";
import GlowCard from "./GlowCard";

const ExlusiveTravel = () => {
  return (
    <div
      id="travel"
      className=" h-full w-[90%] mx-auto mb-6"
    >
      
        <div>
          <h1 className="text-center mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant">
            The Rare <span className="text-[#e99b63]">Reserve</span>
          </h1>
        </div>

        <div className="mt-8 relative">
          <div className="relative z-50 md:space-y-20 space-y-5">
            {expCards.map((card, index) => (
              <div
                key={card.title}
                className="flex flex-col-reverse md:flex-row md:gap-10 gap-8 justify-between"
              >
                <div
                  className="md:w-2/6 flex flex-col items-center rounded-lg font-cormorant font-medium text-sm text-white/60
                  bg-gradient-to-b from-[#656565] to-[#1a1a1a]/30
                  shadow-[0px_0px_12px_#656565]"
                >
                  <GlowCard card={card} index={index}>
                    <div className="w-full md:w-[70%] px-0 md:px-10">
                      <img
                        src={card.imgPath}
                        alt={card.title}
                        className="w-full object-cover h-[250px] mx-auto md:ml-10" //photo product full width
                      />
                    </div>
                  </GlowCard>
                </div>

                <div className="md:w-4/6">
                  <div className="flex items-start">
                    <div className="absolute top-0 xl:left-[35.5vw] md:left-10 left-5 h-full flex justify-center">
                      <div className="absolute z-30 h-[110%] -top-10 w-14 md:w-28" />{" "}
                      {/* bg-black */}
                      <div className="bg-gradient-to-r from-[#656565] to-[#e99b63] w-[1px] h-full" />
                    </div>

                    <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="md:size-[120px] size-10 flex-none rounded-full flex justify-center items-center md:-translate-y-7">
                        <img src={card.logoPath} alt="logo" />
                      </div>

                      <div className="flex text-center py-2 px-5">
                        <h1 className="font-semibold text-3xl">{card.title}</h1>

                        <ul className=" ms-5 my-4  flex flex-col gap-4 text-white-50">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default ExlusiveTravel