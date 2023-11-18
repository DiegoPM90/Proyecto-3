# Informe PROYECTO 3, GRUPO 1, Cohorte 10, Desarrollo Web Full Stack del Bootcamp UDD. 

# Proyecto-3 
 
![](https://raw.githubusercontent.com/DiegoPM90/Proyecto-3/33e6f51a0476b7b786162ea0e5632e1cdececd0f/img/Logo%20Buscador.png)

* [1. Introduccion](#1-introduccion)
* [2. Enlace](#2-enlace)
* [3. Descripcion](#3-descripcion)
* [4. Conclusion](#4-conclusion)

## 1. Introduccion

En este proyecto, nos propusimos crear una página web dinámica que respondiera al requerimiento del Proyecto 3 del Bootcamp UDD DWFS, de consumir una API para visualizar datos a través de Chart.js. Nuestro equipo, conformado por Sebastián Aburto, José Ángel Valdés, Diego Pizarro y Paz Flores seleccionó la API de [Animales Disponibles para Adopción en Chile](https://huachitos.cl/api/animales), que proporciona datos sobre perros y gatos que buscan un hogar en distintas comunas del país. Este sitio podría ser una propuesta para fundaciones que busquen promover la adopción responsable de animales y concientizar sobre la situación de los animales abandonados en el país. Nuestra página web permite ver el listado de los animales disponibles, y visualizar gráficos de barras sobre la distribución de los animales según diferentes criterios.

## 2. Enlace
[Url del proyecto](https://diegopm90.github.io/Proyecto-3/)


Vinculo para visualizar la Pagina Web: [Enlace] (https://diegopm90.github.io/Proyecto-3/index.html)




## 3. Descripcion

El desarrollo de este proyecto contempló comunicación diaria y reuniones, además de revisiones constantes del código. 
Utilizamos GitHub como plataforma principal para el control de versiones y la colaboración, aprovechando la creación de ramas individuales para cada miembro, así como la realización periódica de pull requests y merges.

En el proceso se dieron muchos cambios debido a la dificultad de encontrar un propósito adecuado para la información que queríamos acceder, por esto, la propuesta fue cambiando desde su inicio, comenzando por ser una propuesta para sitio de compración de productos electronicos, hasta que finalmente se seleccionó la API de "huachitos.cl"
[Aqui  se puede acceder a una carpeta con las propuestas visuales iniciales que fuimos generando.](https://drive.google.com/drive/folders/1QzNrgPkDHDxR68Xyy6c0x4Ic2pzkWyB-?usp=sharing)


Para el consumo de la API, usamos la función fetch con async y await. En cuanto a la modularización del código JavaScript, usamos la sintaxis de import y export. Para el diseño de la página, se utilizaron etiquetas HTML5, propiedades CSS con clases, y un layout basado en grid, con el apoyo de librerías de bootstrap. La creación de los gráficos fue realizada con la librería Chart.js, que nos permitió generar gráficos de barras y de dona con los datos de la API. 
Algunos de los desafíos que enfrentamos fueron: elegir una API adecuada, que tuviera suficiente información y fuera fácil de usar; adaptar el diseño de la página a diferentes tamaños de pantalla, usando media queries y responsive design; y manejar los errores y excepciones que podían ocurrir al consumir la API o al graficar los datos.

[Diagrama 1](https://github.com/DiegoPM90/Proyecto-3/assets/139089135/fd26bb03-6f47-4c24-9d30-e7dc8bd4f80b)

[Diagrama 2](https://github.com/DiegoPM90/Proyecto-3/assets/139089135/e4fece95-c866-4461-8299-787aa0d8ff2e)

[Diagrama 3](https://github.com/DiegoPM90/Proyecto-3/assets/139089135/8a1b791f-8247-4c8d-8612-65497ac61f0f)

En la 1° página se puede apreciar la bienvenida, encontrara la presentación de la página donde invita a los usuarios a adoptar una mascota ya sea perro o gato, para ello está el botón que lleva a la 2° pagina donde están los datos graficados de los animales donde se distinguen en especie, porcentaje de mascotas esterilizadas y el ultimo grafico donde se detallan las edades de los animales. También están las tarjetas de presentación de cada mascota con su fotografía detallando desde su nombre, ciudad o comuna de residencia, una descripción de la posible mascota y el botón de contacto para adoptar que te envía a la 3° pagina que es netamente de contacto a través de WhatsApp.





## 4. Conclusion


Este proyecto representó una oportunidad valiosa para trabajar en equipo, siendo una experiencia satisfactoria y desafiante, tanto a nivel individual como grupal. Logramos desarrollar una página web que cumpliera con el requerimiento y además propusiera otras funciones, de manera que, a futuro, pueda ser implementada con éxito tanto en su diseño como en su funcionalidad. Exploramos diversas APIs, utilizamos Chart.js y superamos obstáculos relacionados con el trabajo en equipo y el aprendizaje de JavaScript, especialmente en la modularización del código. Fue un proceso divertido, enriquecedor y provechoso a nivel individual, principalmente debido a los desafíos vinculados a la asincronía y las complejidades al utilizar GitHub para el trabajo en equipo, aspectos que esperamos mejorar para futuros proyectos, aumentando así nuestra eficiencia.






