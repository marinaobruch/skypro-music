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
  return (
    <div>
      <div
        className="filter__button _btn-text"
        style={{
          color: filter && id === open ? "#ad61ff" : "#ffffff",

          borderColor: filter && id === open ? "#ad61ff" : "#ffffff",
        }}
        onClick={onFilterClick}
      >
        {value}
      </div>

      {filter && id === open ? (
        <div className="filter__form">
          {arrays.map((option) => (
            <option
              className="filter__item"
              key={new Date().getTime()}
            >
              {option}
            </option>
          ))}
        </div>
      ) : null}
    </div>
  );
}
