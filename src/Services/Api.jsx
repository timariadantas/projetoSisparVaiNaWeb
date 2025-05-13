import axios from "axios";

// criando instancia do axios , chamada api

const api = axios.create({
    baseURL: "http://localhost:500"
})

export default api;