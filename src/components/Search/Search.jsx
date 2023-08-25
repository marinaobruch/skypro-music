import React from "react";
import * as S from "./Search.styles.js";

export default function Search() {
  return (
    <S.CentreBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        className="search__text"
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CentreBlockSearch>
  );
}
