import axios from 'axios';

// Define the base URL of the backend API.
export const api = axios.create({
  baseURL: 'http://localhost:3000', // The Fastify backend address
});
