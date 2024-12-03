import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/pasantias',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getAll() {
    return apiClient.get('/');
  },
  get(id) {
    return apiClient.get(`/${id}`);
  },
  create(data) {
    return apiClient.post('/', data);
  },
  update(id, data) {
    return apiClient.put(`/${id}`, data);
  },
  delete(id) {
    return apiClient.delete(`/${id}`);
  },
};
