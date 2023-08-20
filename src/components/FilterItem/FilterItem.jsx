import React from "react";
import "./FilterItem.css";

export default function FilterItem({
  value,
  onFilterClick,
  arrays,
  filter,
  open,
  id,
}) {
  return (
    <div>
      <div
        className="filter__button _btn-text"
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
