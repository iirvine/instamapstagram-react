import instajam from 'imports?window=>global!exports?window.Instajam!instajam';
import Promise from 'bluebird';

instajam.init({
  clientId: INSTAGRAM_CLIENT_ID,
  redirectUri: INSTAGRAM_REDIRECT_URI,
  scope: ['basic', 'comments']
});

export function queryLocation({lat, lng}) {
  return new Promise((resolve, reject) => {
    instajam.media.search({lat, lng}, (response) => {
      if (response.data) {
        resolve(response);
      }
      else {
        reject(response);
      }
    });
  });
}

export function isAuthorized() {
  return instajam.authenticated;
}

export function getAuthUrl() {
  return `https://instagram.com/oauth/authorize/?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${INSTAGRAM_REDIRECT_URI}&response_type=token&scope=basic+comments`;
}