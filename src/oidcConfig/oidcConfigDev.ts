const oidcConfigDev = {
    authority: 'https://accounts.google.com/o/oauth2/auth',
    client_id: '1013672752019-lpq8udnict2n5ns3rv9bicgv753g1p1q.apps.googleusercontent.com',
    client_secret: '<secret-here>',
    redirect_uri: 'http://localhost:5173',
    response_type: 'code',
    scope: 'openid profile',
    metadata: {
        token_endpoint: 'https://oauth2.googleapis.com/token',
        authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
        jwks_endpoint: 'https://www.googleapis.com/oauth2/v1/certs',
    },
};

export default oidcConfigDev;
