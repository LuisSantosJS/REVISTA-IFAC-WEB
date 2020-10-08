import axios from 'axios';
const URL = 'https://api-revista.herokuapp.com'
const api = axios.create({
    baseURL: URL,
    validateStatus: (status) => {
        return true;
      },
});
export { URL };
export default api;