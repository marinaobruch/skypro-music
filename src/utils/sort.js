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

export const filtrationTracks = (trackList, filter) =>
  trackList?.filter((item) => {
    if (filter.activeOptions.length === 0) {
      return item;
    }

    if (filter.activeOptions.includes("Неизвестный исполнитель")) {
      return item.author === "-";
    }

    return (
      filter.activeOptions.includes(item.genre) ||
      filter.activeOptions.includes(item.author)
    );
  });
