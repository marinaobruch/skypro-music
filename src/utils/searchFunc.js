export const searchTracks = (trackList, search) =>
	trackList?.filter(
		(track) =>
			track?.name.toLowerCase().includes(search.toLowerCase()) ||
			track?.author.toLowerCase().startsWith(search.toLowerCase()),
	)
