import PropTypes from "prop-types";

function Banner({ gameBanner }) {

  Banner.propTypes = {
    gameBanner: PropTypes.shape({
      background_image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      released: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className="relative ">
      <div className="absolute p-5 bottom-0 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-lg ">
        <h2 className="text-5xl text-white font-bold">{gameBanner.name}</h2>
        <h3 className="text-2xl text-white pt-1">
          Released date: {gameBanner.released}
        </h3>
      </div>
      <img
        src={gameBanner.background_image}
        alt="game_image"
        className="md:h-[320px] w-full object-cover rounded-xl "
        style={{ objectPosition: "top" }}
      />
    </div>
  );
}

export default Banner;
