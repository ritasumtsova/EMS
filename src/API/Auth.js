const axios = require('axios');

const AuthAPI = {
  CONFIG: axios.create({
    baseURL: 'https://app-corporation-docker.herokuapp.com/api/v1/user',
  }),

  login(userName, password) {
    return AuthAPI.CONFIG.post('/login', {
      userName,
      password,
    });
  },
};

export default AuthAPI;
