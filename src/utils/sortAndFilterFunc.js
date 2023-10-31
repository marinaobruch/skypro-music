export const sortTracks = (trackList, selectedSort) =>
  [...trackList]?.sort((a, b) => {
    if (
      selectedSort === "old" &&
      new Date(a.release_date) < new Date(b.release_date)
    ) {
      return -1;
    }

    if (
      selectedSort === "new" &&
      new Date(a.release_date) > new Date(b.release_date)
    ) {
      return -1;
    }
    return 0;
  });

export const filtrationTracks = (trackList, filter) => {
  const findAuthor = trackList?.filter((item) => {
    if (filter.activeOptions.length === 0) {
      return item;
    }
    return filter.activeOptions.includes(item.author);
  });

  const findGenre = trackList?.filter((item) => {
    if (filter.activeOptions.length === 0) {
      return item;
    }
    return filter.activeOptions.includes(item.genre);
  });

  const matchAuthorAndGenre = () => {
    if (findAuthor.length === 0) {
      return findGenre;
    }
    if (findGenre.length === 0) {
      return findAuthor;
    }
    if (findAuthor.length > findGenre.length) {
      return findGenre.filter((el) => findAuthor.indexOf(el) > -1);
    }
    if (findAuthor.length <= findGenre.length) {
      return findAuthor.filter((el) => findGenre.indexOf(el) > -1);
    }
  };
  return matchAuthorAndGenre();
};
