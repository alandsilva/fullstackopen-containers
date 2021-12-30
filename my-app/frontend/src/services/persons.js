import axios from 'axios';
const baseUrl = process.env.REACT_APP_BACKEND_URL;

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson);
};

const update = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, remove };
