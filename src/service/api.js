import axios from 'axios';

// Consumindo API
const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;
// Sempre que usar uma função assíncrona, devo obrigatóriamente usar await