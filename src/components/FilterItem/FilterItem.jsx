import React from "react";
import "./FilterItem.css";

export default function FilterItem({ value, onFilterClick, filter }) {
  return (
    <div>
      <div
        className="filter__button _btn-text"
        onClick={onFilterClick}
      >
        {value}
      </div>
      {filter ? (
        <div className="filter__form">
          <p className="filter__item">111111</p>
          <p className="filter__item">111111</p>
          <p className="filter__item">111111</p>
          <p className="filter__item">111111</p>
          <p className="filter__item">111111</p>
        </div>
      ) : null}
    </div>
  );
}
