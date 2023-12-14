import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '1c36548a-c7e9-44d6-b7d1-55bacebe2924',
    authority: 'https://login.microsoftonline.com/common',
    redirectUri: 'http://localhost:5001',
  },
};

const pca = new PublicClientApplication(msalConfig);

export { pca };
