const axios = require('axios');

// const API = axios.create({
//     baseURL: `http://localhost:3000/api/`,
//     headers: {
//         Authorization: '0123456789'
//     }
// });

// export default API;

const API = {
    PATH: 'http://localhost:3000/api/',
    TOKEN: '0123456789',

    getDepartments () {
        return axios({
            method: 'get',
            url: `${API.PATH}department`,
            headers: {
                Authorization: API.TOKEN
            }
        })
        .then(response => response)
        .catch(error => error)
    },
        
    getDepartmentInfo (id) {
        return axios({
            method: 'get',
            url: `${API.PATH}department/${id}`,
            headers: {
                Authorization: API.TOKEN
            }
        })
        .then(response => response)
        .catch(error => error)
    }
}

export default API;