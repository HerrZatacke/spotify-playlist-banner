import renderImages from './renderImages';

const getPlaylist = (spotifyApi, value) => {

  // possible formats:
  // spotify:playlist:37i9dQZF1DX0SM0LYsmbMT
  // https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT?si=LtuCrQjyT-eXLERgUAuaGA

  let playlistId = null;

  if (value.startsWith('spotify:playlist:')) {
    playlistId = value.substr(17, 22);
  } else if (value.startsWith('https://open.spotify.com/playlist/')) {
    playlistId = value.substr(34, 22);
  }

  if (!playlistId) {
    return;
  }

  spotifyApi.getPlaylist(playlistId, (error, playlist) => {
    if (error) {
      console.error(error);
      return;
    }

    renderImages(playlist.tracks.items);
  });
};

export default getPlaylist;
