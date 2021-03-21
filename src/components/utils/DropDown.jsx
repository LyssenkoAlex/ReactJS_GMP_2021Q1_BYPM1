/* eslint-disable jsx-a11y/label-has-associated-control,react/no-array-index-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import MovieDetails from "../MovieDetails";

const DropDown = ({ handleCheckBoxChange, checkedItems }) => {
  const [showList, setShowList] = useState(false);

  const genres = [
    { title: "Drama" },
    { title: "Romance" },
    { title: "Animation" },
    { title: "Adventure" },
    { title: "Family" },
    { title: "Comedy" },
    { title: "Fantasy" },
    { title: "Science Fiction" },
  ];

  const handleShowList = () => {
    setShowList(!showList);
  };

  const genresList = genres.map((genre, index) => (
    <li key={`genre_${index}`}>
      <label>
        {genre.title}
        <input
          type="checkbox"
          checked={checkedItems[genre.title] === undefined ? false : checkedItems[genre.title]}
          value={genre.title}
          name={genre.title}
          onChange={handleCheckBoxChange}
        />
      </label>
    </li>
  ));

  return (

    <div className={showList ? "dropdown-check-list.visible" : "dropdown-check-list"}>
      <span className="anchor drop_down_select_anchor" onClick={handleShowList}>Select Genre</span>
      <ul className="items drop_down_wrapper">
        {genresList}
      </ul>
    </div>
  );
};
export default DropDown;

DropDown.propTypes = {
  handleCheckBoxChange: PropTypes.func.isRequired,
  checkedItems: PropTypes.object,
};
