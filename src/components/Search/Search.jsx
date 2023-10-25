import * as S from "./Search.styles.js";

export const Search = (searchQuery, setSearchQuery) => {
  // console.log(searchQuery);

  return (
    <S.CentreBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </S.CentreBlockSearch>
  );
};
