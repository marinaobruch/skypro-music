export const sortTracks = (trackList, selectedSort) =>
  trackList?.sort((a, b) => {
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

export const tracksArray = [
  {
    id: "0",
    track: "Guilt",
    artist: "Nero",
    album: "Welcome Reality",
    time: "4:44",
    genre: "Хип-хоп",
    modify: "",
    release_date: "2005-06-11",
  },
  {
    id: "1",
    track: "Guilt",
    artist: "Nero",
    album: "Welcome Reality",
    time: "4:44",
    genre: "Хип-хоп",
    modify: "",
    release_date: "2005-06-11",
  },
  {
    id: "2",
    track: "Elektro",
    artist: "Dynoro, Outwork, Mr. Gee",
    album: "Elektro",
    time: "2:22",
    genre: "Рок",
    modify: "",
    release_date: "2006-06-11",
  },
  {
    id: "3",
    track: "Guilt",
    artist: "Nero",
    album: "Welcome Reality",
    time: "4:44",
    genre: "Поп-музыка",
    modify: "",
    release_date: "2007-06-11",
  },
  {
    id: "4",
    track: "I’m Fire",
    artist: "Ali Bakgor",
    album: "I’m Fire",
    time: "2:22",
    genre: "Техно",
    modify: "",
    release_date: "2011-06-11",
  },
  {
    id: "5",
    track: "Non Stop",
    artist: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12",
    genre: "Техно",
    modify: "(Remix)",
    release_date: "2005-06-11",
  },
  {
    id: "6",
    track: "Run Run",
    artist: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    time: "2:54",
    genre: "Поп-музыка",
    modify: "(feat. AR/CO)",
    release_date: "2009-06-11",
  },
  {
    id: "7",
    track: "Eyes on Fire",
    artist: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    time: "5:20",
    genre: "Ремикс",
    modify: "(Zeds Dead Remix)",
    release_date: "2002-06-11",
  },
  {
    id: "8",
    track: "Mucho Bien",
    artist: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    time: "3:41",
    genre: "Ремикс",
    modify: "(Hi Profile Remix)",
    release_date: "2005-06-11",
  },
  {
    id: "9",
    track: "Knives n Cherries",
    artist: "minthaze",
    album: "Captivating",
    time: "1:48",
    genre: "Инди",
    modify: "(Zeds Dead Remix)",
    release_date: "2000-06-11",
  },
];
