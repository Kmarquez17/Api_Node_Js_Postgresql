# Guia para alojar API con node y postgresql en un servidor en la nubes de Heroku

## Pasos para a seguir

- Crear un proyecto en heroku.
- Añadimos el complemento de `Heroku Postgres` al proyecto en la seccion de recursos.
-  Creando el complemento buscamos las credenciales para acceder a la base de datos, esta misma configurarla en el proyecto en los archivos `.env` .
- Nos conectamos a un gestor de base de datos para crear las tablas correspondientes. 
- Instalar el CLI de Heroku https://devcenter.heroku.com/articles/heroku-cli.
    
- Crear un archivo en la raíz del proyecto llamada **Procfile**, dentro de el insertar linea **web: npm start**
- Crear un repositorio con Heroku con la consala desde la raíz del proyecto
```
    $ heroku login
    $ git init
    $ heroku git:remote -a 'nombre proyecto'
    $ git add .
    $ git commit -am "Primer Deploy"
    $ git push heroku master
```
