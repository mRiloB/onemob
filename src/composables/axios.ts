import axios from 'axios';

export function useAxios () {
  const api = axios.create({
    baseURL: 'https://aws.onemob.com.br:4310/rest',
    headers: {
      'Authorization': 'Basic TW9ieTpIb3J1c0AxODk0ISEhIw==',
      'Content-Type': 'application/json'
    }
  });

  const getIdentity = async () => {
    const res = await api.get('/system/identity');
    console.log('data:', res.data);
  };

  return { getIdentity };
}
