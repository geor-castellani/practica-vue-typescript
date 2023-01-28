import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

// Empiezo creando la base de la URL que usaremos para realizar las llamadas a la API:
const fakePlatziApi = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1"
})

fakePlatziApi.interceptors.request.use((config:InternalAxiosRequestConfig) => {
    // Accedo el token del localStorage:
    const token = localStorage.getItem("token");
    if (token) {
        // Si existe el token, para cada llamada que se haga establezco el token en la cabecera:
        (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); 
    }
    return config;
});

export default fakePlatziApi;