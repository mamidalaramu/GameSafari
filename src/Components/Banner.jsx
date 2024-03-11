import PropTypes from "prop-types";
import { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {}, []);

  Banner.propTypes = {
    gameBanner: PropTypes.shape({
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="relative">
      <div className="absolute p-5 bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
      </div>
      <img
        src={gameBanner.background_image}
        alt="game_image"
        className="md:h-[320px] w-full object-cover rounded-xl"
        style={{ objectPosition: "top" }}
      />
    </div>
  );
}

export default Banner;
