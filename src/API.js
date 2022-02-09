const axios = require('axios');

const API = {
  PATH: 'http://localhost:3000/api/',
  TOKEN: '0123456789',
  CONFIG: axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
      Authorization: '0123456789',
    },
  }),

  getDepartments() {
    return API.CONFIG.get('/department')
      .then((response) => response)
      .catch((error) => error);
  },

  getDepartmentInfo(id) {
    return API.CONFIG.get(`/department/${id}`)
      .then((response) => response)
      .catch((error) => error);
  },
};

export default API;
