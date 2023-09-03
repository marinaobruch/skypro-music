import * as S from "./FilterItem.styles.js";

export function FilterItem({ value, onFilterClick, arrays, filter, open, id }) {
  return (
    <div>
      <S.FilterButton
        isClicked={filter && id === open}
        onClick={onFilterClick}
      >
        {value}
      </S.FilterButton>

      {filter && id === open ? (
        <S.FilterForm>
          {arrays.map((option) => (
            <S.FilterItem key={option}>{option}</S.FilterItem>
          ))}
        </S.FilterForm>
      ) : null}
    </div>
  );
}
