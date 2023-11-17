# Backend PreUesApp

## Luis Romero - Bryan Ramírez

Para poder iniciar el backend, primero se ha de contar con un IDE que permita trabajar con Node.js, el cual también debe ser instalado. Luego se ha de clonar este repositorio y finalmente instalar MySQL Workbench en su versión 8.0.30 o superior.

Una vez clonado el repositorio, abrirlo con el IDE de su preferencia y abrir un terminal en el cual se ha de escribir el siguiente comando para instalar las dependencias del proyecto (fijarse que la ruta del terminal corresponda a la carpeta donde se guardó el repositorio clonado).

`npm install`

Una vez instaladas las dependencias del proyecto, se ha de crear un archivo llamado “.env” (sin las comillas) en el cual se han de escribir las siguientes variables de entorno:

```
DATABASE_URL="mysql:USER:PASSWORD@HOST:PORT/DATABASE_NAME"
TOKEN_SECRET= escribir aquí cualquier cadena de texto sin comillas
EMAILER_HOST= revisar host en archivo subido al aula con link del repositorio
EMAILER_USER= revisar credencial en archivo subido al aula con link del repositorio
EMAILER_PASSWORD= revisar credencial en archivo subido al aula con link del repositorio
```

Como se mencionó, el contenido de las variables de entorno "EMAILER" se encuentrar en el .txt subido al aula con el link a este repositorio.
En el caso de DATABASE_URL, a continuación se explican los componentes de la URL los cuales deben ser reemplazados por valores reales.

| Nombre   | Placeholder   | Descripción                                                            |
| -------- | ------------- | ---------------------------------------------------------------------- |
| User     | USER          | Nombre del usuario de la base de datos, ej: Pedro                      |
| Password | PASSWORD      | Contraseña del usuario de la base de datos                             |
| Host     | HOST          | Dirección IP/dominio de su servidor de base de datos, ej: localhost    |
| Port     | PORT          | Puerto en el que su servidor de base de datos está corriendo, ej: 5432 |
| Database | DATABASE_NAME | Nombre de la base de datos que se quiere utilizar, ej: mydb            |

Una vez definidas estas variables de entorno, recordar guardar los cambios en el archivo .env, ya que luego se procederá a crear las tablas en la base de datos con el siguiente comando en el mismo terminal que se uso el `npm install` :

`npx prisma migrate dev --name cualquier_nombre_aqui`

El comando anterior también poblara la base de datos con información para las tablas avatar, predefined_essay, question y answer.

En caso de que no se llene la base de datos se puede ejecutar el siguiente comando por separado para poblarla:

`npx prisma db seed`

En caso de que desee restaurar la base de datos a su estado inicial, podrá ejecutar el siguiente comando, el cual también poblara la base de datos con sus datos originales y eliminara el resto.

`npx prisma migrate reset`

Por último, para correr el servidor de la base de datos se ha de ejecutar en el terminal el siguiente comando:

`npm run dev`
