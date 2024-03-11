import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";

function Home() {
  const [gameList, setGameList] = useState([]);

  const [listByGenreId, setListByGenreId] = useState([]);

  const [selectedGenrename, setSelectedGenrename] = useState("Action");

  useEffect(() => {
    fetchGameList();
    fetchListByGenreId(4);
  }, []);

  const fetchGameList = () => {
    GlobalAPI.getAllGames
      .then((response) => {
        setGameList(response.data.results);
      })
      .catch((error) => console.error("Error fetching game list", error));
  };

  const fetchListByGenreId = (id) => {
    GlobalAPI.getListByGenreId(id)
      .then((response) => {
        setListByGenreId(response.data.results);
      })
      .catch((error) =>
        console.error("Error fetching list by genre ID", error)
      );
  };

  return (
    <div className="grid grid-cols-5 p-5 gap-[1rem]">
      <div className="hidden md:block col-span-1">
        <GenreList
          genreId={(genreId) => fetchListByGenreId(genreId)}
          selectedGenrename={(name) => setSelectedGenrename(name)}
        />
      </div>
      <div className="col-span-5 md:col-span-4">
        {gameList?.length > 0 && listByGenreId.length > 0 ? (
          <div>
            <Banner
              gameBanner={gameList[Math.round(Math.random() * gameList.length)]}
            />
            <TrendingGames gameList={gameList} />
            <GamesByGenreId
              gameList={listByGenreId}
              selectedGenrename={selectedGenrename}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
