import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.metadata = { startTime: new Date() };
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  const endTime = new Date();
  const startTime = response?.config?.metadata?.startTime;
  const duration = endTime - startTime;
  
  console.log('Request to ' + response.config.url + ' took ' + duration + 'ms');
  return response;
});

const response = await axios.get('/api/data/articles?timeout=3000');
const { data } = response;

document.querySelector('#data').innerHTML = data[0].content;
