const axios = require('axios');

const API = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: process.env.REACT_APP_TOKEN,
    },
  }),

  getDepartments() {
    return API.CONFIG.get('/department')
      .catch((error) => error);
  },

  getDepartmentInfo(id) {
    return API.CONFIG.get(`/department/${id}`);
  },
};

export default API;
