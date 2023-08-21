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
        className={`${
          filter && id === open ? "filter__button_active" : "filter__button"
        }`}
        onClick={onFilterClick}
      >
        {value}
      </div>

      {filter && id === open ? (
        <div className="filter__form _active">
          {arrays.map((option) => (
            <option
              className="filter__item"
              key={option}
            >
              {option}
            </option>
          ))}
        </div>
      ) : null}
    </div>
  );
}
