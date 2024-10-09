import axios from 'axios';

const SYNOLOGY_AUTH_URL = 'https://your-synology-nas-address:5001/webapi/auth.cgi';
const CLIENT_ID = 'your-client-id';
const REDIRECT_URI = 'http://localhost:5173/oauth-callback';

export async function getAuthorizationUrl() {
  const params = new URLSearchParams({
    api: 'SYNO.API.Auth',
    version: 3,
    method: 'oauth_authorize',
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
  });

  return `${SYNOLOGY_AUTH_URL}?${params.toString()}`;
}

export async function getAccessToken(authorizationCode) {
  const params = new URLSearchParams({
    api: 'SYNO.API.Auth',
    version: 3,
    method: 'oauth_token',
    client_id: CLIENT_ID,
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: REDIRECT_URI,
  });

  try {
    const response = await axios.post(`${SYNOLOGY_AUTH_URL}`, params);
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    return null;
  }
}

export function getAccessTokenHeader(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
  };
}