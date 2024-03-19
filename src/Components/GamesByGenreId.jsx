import PropTypes from "prop-types";

function GamesByGenreId({ gameList, selectedGenrename }) {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenrename} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {gameList.map((item) => (
          <div
            key={item.id}
      
            className="  p-3 rounded-lg pb-10 h-full
            hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer
            "
          >
            <img
              src={item.background_image}
              alt=""
              className="w-full h-[80%] rounded-xl object-cover "
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {" "}
                {item.metacritic}
              </span>
            </h2>
            <h2 className="dark:text-white">
              {item.rating} {item.reviews_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

GamesByGenreId.propTypes = {
  gameList: PropTypes.array.isRequired,
  selectedGenrename: PropTypes.string.isRequired,
};

export default GamesByGenreId;
