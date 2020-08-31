import 'babel-polyfill/dist/polyfill';
import SpotifyWebApi from 'spotify-web-api-js';
import '../scss/index.scss';
import spotifyLogin from './spotifyLogin';
import getMyFavs from './getMyFavs';
import getPlaylist from './getPlaylist';

document.addEventListener('DOMContentLoaded', () => {

  const accessToken = spotifyLogin();

  if (!accessToken) {
    return;
  }

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(accessToken);

  const input = document.getElementById('in');
  const buttonPlaylist = document.getElementById('playlist');
  // const buttonUsersFavs = document.getElementById('usersFavs');
  const buttonMyFavs = document.getElementById('myFavs');


  buttonPlaylist.addEventListener('click', () => {
    getPlaylist(spotifyApi, input.value);
  });

  // buttonUsersFavs.addEventListener('click', () => {
  //   getUserFavs(spotifyApi, input.value);
  // });

  buttonMyFavs.addEventListener('click', () => {
    getMyFavs(spotifyApi);
  });
});
