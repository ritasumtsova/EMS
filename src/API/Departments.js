const axios = require('axios');

const DepartmentsAPI = {
  CONFIG: axios.create({
    baseURL: 'https://app-corporation-docker.herokuapp.com/api/v1',
    headers: {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN)}`,
    },
  }),

  getDepartments() {
    return DepartmentsAPI.CONFIG.get('/department');
  },

  getDepartmentInfo(id) {
    return DepartmentsAPI.CONFIG.get(`/department/${id}`);
  },
};

export default DepartmentsAPI;
