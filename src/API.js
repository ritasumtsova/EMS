const axios = require('axios');

const API = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: localStorage.getItem(process.env.REACT_APP_TOKEN),
    },
  }),

  getDepartments() {
    return API.CONFIG.get('/department');
  },

  getDepartmentInfo(id) {
    return API.CONFIG.get(`/department/${id}`);
  },
};

export default API;
