import { RouteLocation } from "vue-router";

const haveRoleGuard = (to:RouteLocation, from:RouteLocation, next: any) => {
    // Accedo al token almacenado en el localStorage:
    const userToken = localStorage.getItem("token");
    // Si hay token, podremos acceder. Si no, muestro una alerta y retorno al login.
    if(userToken) {
        next();
    }else {
        alert("Necesitas un token para acceder");
        next({name: "login"});
    }
}

export default haveRoleGuard;