import axios from 'axios';
/* Arquivo para conexões externas, consideranndo
    envio e recebimento de dados. */

const api = axios.create({ baseURL: 'https://rocketseat-node.herokuapp.com/api'});
export default api;