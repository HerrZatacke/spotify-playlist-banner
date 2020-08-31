import 'babel-polyfill/dist/polyfill';
import SpotifyWebApi from 'spotify-web-api-js';
import '../scss/index.scss';
import renderImages from './renderImages';
import spotifyLogin from './spotifyLogin';

document.addEventListener('DOMContentLoaded', () => {

  const accessToken = spotifyLogin();

  if (!accessToken) {
    return;
  }

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);


  spotifyApi.getMySavedTracks({
    limit: 50,
  }, (error, tracks) => {
    if (error) {
      console.error(error);
      return;
    }

    renderImages(tracks.items);

  });

  // // https://open.spotify.com/playlist/37i9dQZF1DX0SM0LYsmbMT
  // spotifyApi.getPlaylist('4cGCe3TS5uACllWLeHsHRT', (error, playlist) => {
  //   if (error) {
  //     console.error(error);
  //     return;
  //   }
  //
  //   renderImages(playlist.tracks.items);
  // });

});
