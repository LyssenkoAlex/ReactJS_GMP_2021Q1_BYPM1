/* eslint-disable jsx-a11y/label-has-associated-control,react/no-array-index-key,max-len */
import React, { useState } from "react";
import PropTypes from "prop-types";

const DropDown = ({ handleCheckBoxChange, checkedItems }) => {
  const [showList, setShowList] = useState(false);

  const handleShowList = () => {
    setShowList(!showList);
  };

  const genresList = [...checkedItems.keys()].map((genre, index) => (
    <li key={`genre_${index}`}>
      <label>
        {genre}
        <input
          type="checkbox"
          checked={checkedItems.get(genre)}
          value={genre}
          name={genre}
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
  checkedItems: PropTypes.instanceOf(Map).isRequired,
};
