# challenge-coordinadora
Repositorio para el reto coordinadora para desarrolladores
## Uso
Luego de clonado el proyecto, en la terminal ubicada en el mismo ejecutar el comando 
```bash
npm install 
```
luego ejecutar el comando 
```bash
npm run dev
```
para correr el proyecto, haciendo uso del archivo *api.rest* se pueden ejecutar peticiones sobre cada uno de los endpints, clickeando el enlace *send request* sobre cada endpint.

Luego de haber puesto en marcha el proyecto, en el navegador se puede dirigir a **http://localhost:4000/challenge**, donde abrirá una interfaz de usuario para la ejecución de cad auno de los ejericicos.

## Puntos teóricos

### - Con sus propias palabras explique que es una inyección de dependencias y para qué sirve.
   La inyección de dependencias es la incorporación de nuevos componentes o cpmportamientos para su así, esto ayuda a mantener desacoplado el código, pues, solo se usan las dependencias (componentes o comportamientos) necesarias en el momento adecuado sin consumir más recursos de los necesarios
### - Explique con sus propias palabras las diferencias entre asincrono y sincrono
   - Sincrono: Sincrono es cuando la ejecución de instrucciones se realiza sistematicamente una por una,dando paso  a una instrucción luego de la ejecución de la anterior.
   - Asincrono: Asincrono es cuando la ejecución de instrucciones se realiza de manera asincrona, es decir, la ejecución completa de esta isntruccion asincrona no es necesaria para darle paso a la siguiente instrucción, pues está puede mantenerse espernado a una respuesta sin interrumpirl a ejecución de las demás instrucciones.
### - Cual es la importancia del uso de promesas en un proyecto
   La importancia radica en la asincronicidad, pues, puede que un recurso no esté libre en el momento en que se requiere, por lo que es necesario esperar a que este esté disponible para su consumo, de esta forma las promeas ayudan a la no interrupción del codigo, realizando una cción luego de que se tuvo acceso a lrecurso solicitado.
### - Cual es la importancia de usar ORM dentro de un proyecto, ventaja y desventaja  
   La importancia radica en la facilidad del manejo de los datos de la base de datos relacional, realizando un mapeo a través de un lenguaje orientado a objetos, sus ventajas aparecen en la facilidad del manejo de datos, esto incluyendo las operaciones dentro de la bases de datos, al igual que la velocidad de uso, también ayuda a la protección de la capa donde se accede a los datos, la principal desventaja radica en un entorno donde sea muy masico el flijo de datos, pues el rendimiento se disminuye al agregar un paso más en el procesamiento de datos.
### - Que diferencia hay entre una base de datos SQL, NOSQL
   Justamanete la relación entre los datos, las tablas de SQL mantienen una relación entre ellas para realizar las consultas de manera precisa, mientras que las colecciones de NOSQL, no tienen relación permitiend un acceso más rapido a los datos a través de consultas.
### - Si hablo de colección y documentos me refiero a?
   Las colecciones son la equivalencia de las tablas para NOSQL, y los documentos son la equivalencia de los registro.
### - Si una aplicación está sacando error de CORS a que se está refiriendo?
   Significa que fallo la obtención de un recurso de otro servidor, probablemente por no tener los permisos adecuados para su acceso.
#### PD
   Muchas gracias por la oportunidad en esta convocatoria, realmente fue un reto y estoy contento de haberlo finalizado, pues, como dije en la primera reunión, el frontend no es mi habilidad más fuerte, sin embargo, pude realizar el reto de manera "manual", pues no conozco acerca de ningun framework para fronend, sin embargo, empezaré a aprenderlo, me hubiera gustado aplicarlo en el reto, pero aprender tomaba tiempo y luego aplicarlo mucho más, sin embargo, recalcar en mis ganas de aprender, por lo cual en caso de ser seleccionado, tendré el gusto de aprender las herramientas necesarias para desarrollar un excelente papel.
