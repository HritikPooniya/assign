
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.freeapi.app/api/v1',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await api.post('/users/refresh-token', { token: refreshToken });
        const { accessToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;

        return api(originalRequest);
      } catch (err) {
        // Handle refresh token failure (e.g., log out user)
        console.error('Refresh token failed:', err);
        // You might want to redirect to login here
      }
    }
    return Promise.reject(error);
  }
);

export default api;
