import { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenreId from "../Components/GamesByGenreId";
import SearchGame from "../Components/SearchGame";
import PropTypes from "prop-types";

function Home({ searchTerm }) {
  const [gameList, setGameList] = useState([]);

  const [listByGenreId, setListByGenreId] = useState([]);

  const [selectedGenrename, setSelectedGenrename] = useState("Action");

  const [searchGameList, setSearchGameList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [currentGameIndex, setCurrentGameIndex] = useState(0);

  useEffect(() => {
    fetchGameList();
    fetchListByGenreId(4);
  }, []);

  useEffect(() => {
    const term = searchTerm.toString();
    if (term.trim() !== "") {
      fetchGameBySearch(term);
    }

    setIsLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    if (gameList.length > 0) {
      setCurrentGameIndex(Math.floor(Math.random() * gameList.length));
    }
  }, [gameList]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prevIndex) =>
        prevIndex === gameList.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [gameList]);

  const fetchGameList = async () => {
    GlobalAPI.getAllGames
      .then((response) => {
        setGameList(response.data.results);
      })
      .catch((error) => console.error("Error fetching game list", error));
  };

  const fetchGameBySearch = async (term) => {
    try {
      const data = await GlobalAPI.getGameBySearch(term);
      setSearchGameList(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchListByGenreId = (id) => {
    const existingList = listByGenreId.find((item) => item.genreId === id);

    if (existingList) {
      return setListByGenreId(existingList);
    }
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
            <Banner gameBanner={gameList[currentGameIndex]} />
            <div className="col-span-5 md:col-span-4">
              {isLoading ? (
                <h1>loading...</h1>
              ) : (
                <SearchGame searchGameList={searchGameList} />
              )}
            </div>
            <TrendingGames gameList={gameList} />
            <GamesByGenreId
              gameList={listByGenreId}
              selectedGenrename={selectedGenrename}
            />
          </div>
        ) : null}
      </div>
      <div className="col-span-5 md:col-span-4"></div>
    </div>
  );
}

Home.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Home;
