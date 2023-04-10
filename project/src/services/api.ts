import axios, {AxiosInstance} from 'axios';


const BACK_URL = 'https://12.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACK_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

createAPI().get('/hotels').then((response) => {
  console.log(response);
});

