import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function TrendingGames({ gameList }) {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  useEffect(() => {}, []);
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">
        New and Trending
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-5 relative">
        {gameList.map(
          (item, index) =>
            index < 10 && (
              <div
                className=" rounded-lg group hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer shadow-md"
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <img
                  src={item.background_image}
                  alt=""
                  className="h-[230px] rounded-t-lg object-cover "
                />

                <div className=" px-4 py-2 bg-gray-900 text-white z-6 rounded-b-lg">
                  <h2 className="text-[24px] font-bold">{item.name}</h2>
                  <p className="text-sm">Ratings: {item.metacritic}</p>
                </div>

                <div
                  className={`flex-start relative overflow-hidden bottom-0 left-0 w-full px-4 py-2 bg-gray-900 bg-opacity-80 text-white ${
                    hoveredIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="mt-2">
                    <p className="text-sm">Website: {item.website}</p>
                    <p className="text-sm">Released Date: {item.released}</p>

                    
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

TrendingGames.propTypes = {
  gameList: PropTypes.array.isRequired,
};

export default TrendingGames;
