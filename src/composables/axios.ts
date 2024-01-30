import axios from 'axios';

export function useAxios () {
  const api = axios.create({
    baseURL: 'https://aws.onemob.com.br:445/rest',
    headers: {
      'Authorization': 'Basic bWJlbmk6QE1iZW5pMjIwOQ==',
      'Content-Type': 'application/json',
    }
  });

  const getActiveConnections = async () => {
    const res = await api.get('/ppp/active');
    console.log('data:', res.data);
  };

  return { getActiveConnections };
}
