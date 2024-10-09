import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAccessToken } from '../utils/synologyAuth';

function OAuthCallback() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');

    if (code) {
      getAccessToken(code).then((token) => {
        if (token) {
          // Stockez le token dans le localStorage ou dans un état global
          localStorage.setItem('synologyAccessToken', token);
          navigate('/backup');
        } else {
          console.error('Failed to get access token');
          navigate('/');
        }
      });
    }
  }, [location, navigate]);

  return <div>Authentification en cours...</div>;
}

export default OAuthCallback;