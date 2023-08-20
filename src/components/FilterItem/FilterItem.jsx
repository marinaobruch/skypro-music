import React from "react";
import "./FilterItem.css";

export default function FilterItem({ value }) {
  return <div className="filter__button button-author _btn-text">{value}</div>;
}
