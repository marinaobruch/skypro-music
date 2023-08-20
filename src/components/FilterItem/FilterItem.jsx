import React, { useState } from "react";
import "./FilterItem.css";

export default function FilterItem({
  value,
  onFilterClick,
  arrays,
  filter,
  open,
  id,
}) {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div>
      <div
        className="filter__button _btn-text"
        style={{
          color:
            filter && id === open ? "#ad61ff" : isHover ? "#d9b6ff" : "#ffffff",

          borderColor:
            filter && id === open ? "#ad61ff" : isHover ? "#d9b6ff" : "#ffffff",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onFilterClick}
      >
        {value}
      </div>

      {filter && id === open ? (
        <div className="filter__form">
          {arrays.map((option) => (
            <option
              className="filter__item"
              key={option.id}
            >
              {option.name}
            </option>
          ))}
        </div>
      ) : null}
    </div>
  );
}
