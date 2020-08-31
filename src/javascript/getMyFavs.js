import renderImages from './renderImages';

const getMyFavs = (spotifyApi) => {
  spotifyApi.getMySavedTracks({
    limit: 50,
  }, (error, tracks) => {
    if (error) {
      console.error(error);
      return;
    }

    renderImages(tracks.items);
  });
};

export default getMyFavs;
