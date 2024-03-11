import PropTypes from "prop-types";
import { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    // console.log(gameList);
  }, []);
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
        {gameList.map(
          (item, index) =>
            index < 10 && (
              // bg-[#76a8f75e]
              <div
                className=" rounded-lg group 
              hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer
              "
                key={item.id}
              >
                <img
                  src={item.background_image}
                  alt=""
                  className="h-[230px] rounded-t-lg object-cover "
                />
                <h2 className="dark:text-white p-2 text-[15px] font-bold ">
                  {item.name}
                </h2>
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
