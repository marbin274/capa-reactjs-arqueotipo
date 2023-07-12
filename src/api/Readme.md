# Api

Contiene la configuración y estructura para consumir los servicios necesario del proyecto

Para estructurar las carpetas:

Si se tiene la ruta `www.empresa.com/api/auth/login`

1. La base de la ruta (`www.empresa.com/api`) debe ser registrada en una variable de entorno (`REACT_APP_API_URL`) que será consumido desde el archivo `api/config/private.api`
2. Con la ruta restante se debe crear la carpeta `auth`, dentro crear el archivo `auth.api.ts`
3. El archivo debe contener la clase `AuthApi` y el método estático `login`
