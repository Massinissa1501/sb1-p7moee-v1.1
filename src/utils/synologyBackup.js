import axios from 'axios';
import { getAccessTokenHeader } from './synologyAuth';

const SYNOLOGY_WEBDAV_URL = 'https://your-synology-nas-address:5006/webdav/';

export async function backupToSynology(data, filename, accessToken) {
  try {
    const response = await axios.put(
      `${SYNOLOGY_WEBDAV_URL}${filename}`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          ...getAccessTokenHeader(accessToken),
        },
      }
    );
    console.log('Backup successful:', response.status);
    return true;
  } catch (error) {
    console.error('Backup failed:', error);
    return false;
  }
}

export async function restoreFromSynology(filename, accessToken) {
  try {
    const response = await axios.get(`${SYNOLOGY_WEBDAV_URL}${filename}`, {
      headers: getAccessTokenHeader(accessToken),
    });
    console.log('Restore successful');
    return response.data;
  } catch (error) {
    console.error('Restore failed:', error);
    return null;
  }
}