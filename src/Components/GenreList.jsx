import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
function GenreList({ genreId, selectedGenrename }) {
  const [genreList, setGenreList] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchGenreList();
  }, []);
  const fetchGenreList = () => {
    GlobalAPI.getGenreList
      .then((response) => {
        // console.log(response.data.results);
        setGenreList(response.data.results);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <h2 className="text-[30px] font-bold dark:text-white ">Genre</h2>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            {
              setActiveIndex(index);
              genreId(item.id);
              selectedGenrename(item.name);
            }
          }}
          key={item.id}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-200 p-2 group rounded-lg hover:dark:bg-gray-600
        ${activeIndex == index ? "bg-gray-300 dark:bg-grey-600" : null}`}
        >
          <img
            src={item.image_background}
            alt="cat"
            className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300  ${
              activeIndex == index ? "scale-105" : null
            }`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
              activeIndex == index ? "font-bold" : null
            } `}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

GenreList.propTypes = {
  genreId: PropTypes.func.isRequired,
  selectedGenrename: PropTypes.func.isRequired,
};

export default GenreList;
