import queryString from 'query-string';

const spotifyLogin = () => {
  const accessToken = queryString.parse(window.location.hash).access_token;

  if (!accessToken) {
    const loginParams = queryString.stringify({
      client_id: 'c6f6c1abd7e44da28053690bdb414cae',
      response_type: 'token',
      scope: ['user-library-read'].join(' '),
      redirect_uri: `${window.location.protocol}//${window.location.host}`,
    });

    window.location.href = `https://accounts.spotify.com/authorize?${loginParams}`;
    return false;
  }

  return accessToken;
};

export default spotifyLogin;
