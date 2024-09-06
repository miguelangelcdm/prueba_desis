# Prueba Desis

## Requisitos

- PHP >= 7.4
- MySQL
- Apache o Nginx

## Instrucciones

1. Clona el repositorio.
2. Crea una base de datos MySQL y ajusta las credenciales en el archivo `.env` de la siguiente manera:
   ```
    DB_HOST=localhost
    DB_NAME=desis
    DB_USER=(usuario)
    DB_PASSWORD=(contraseña)
    DB_PORT=3306
   ```
3. Ejecuta el archivo SQL ubicado en la carpeta `sql` para crear las tablas necesarias.
4. Asegúrate de que el servidor web tenga acceso al archivo `.env`.
5. Inicia el servidor y prueba la aplicación.

## Notas

- El proyecto utiliza PHP puro y JavaScript nativo con AJAX para la comunicación con el servidor.
- Los estilos están definidos en CSS nativo, sin frameworks adicionales.
