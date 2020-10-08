import axios from 'axios';
const URL = 'http://localhost:8877'
const api = axios.create({
    baseURL: URL,
    validateStatus: (status) => {
        return true;
      },
});
export { URL };
export default api;