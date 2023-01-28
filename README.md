# Online shop: práctica web Typescript + Vue

Ésta es mi resolución de la práctica, pueden ver la página haciendo click en éste link: https://geor-castellani.github.io/practica-vue-typescript/#/login

**Para iniciar sesión utilizar alguna de las siguientes credenciales:**
- Email - "john@mail.com" / Contraseña - "changeme"
- Email - "maria@mail.com" / Contraseña - "12345"

En ésta práctica realizaremos una pequeña simulación de una tienda. Para
ello nos serviremos de la API de pruebas de Platziy para las conexiones a esta API nos serviremos de axios.

La aplicación consta de 4 vistas muy sencillas. Se pueden hacer todos los
componentes que se deseen, pero sólo será necesario entregar estas cuatro
vistas.
Como todas las vistas, que no son la del login, en la parte superior se
mostrará un menú de navegación con un botón para hacer logout. En todas
estas pantallas no se podrá navegar de ninguna manera sin tener un token
guardado. Si no se tiene se navegará a la pantalla de login.
El menú tendrá dos enlaces, uno para la vista de listado de productos y otro
para la vista del perfil. El botón de logout borrará el token guardado de todos
los sitios donde esté y navegará al login.

### Para su ejecución
```
npm install
```

### Para iniciar la aplicación en desarrollo:
```
npm run serve
```

### Para iniciar la aplicación en producción:
```
npm run build
```

### Lints and fixes files:
```
npm run lint
```
### Configuración:

Ver [Configuration Reference](https://cli.vuejs.org/config/).
