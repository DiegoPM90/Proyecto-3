const solicitar = document.getElementById("solicitar");
const ctx = document.getElementById("myChart");
const crear = document.getElementById("crearTarjeta");

const urlApi = "https://huachitos.cl/api/animales";
// const urlApiTipo = `https://huachitos.cl/api/animales/tipo/${tipoAnimal}`


// FUNCION PARA FETCH
const obtenerDatos = async () => {
  // e.preventDefault(); /* desactive el boton, ya que el landing ya tiene uno */
  const response = await fetch(urlApi);
  const respuestaJson = await response.json();
  console.log(respuestaJson);
  const imagen = respuestaJson.data.map((elemento) => elemento.imagen);
  const esterilizado = respuestaJson.data.map(
    (elemento) => elemento.esterilizado
  );
  const vacunas = respuestaJson.data.map((elemento) => elemento.vacunas);
  const edad = respuestaJson.data.map((elemento) =>
    pasaredadAmeses(elemento.edad)
  );
  const nombre = respuestaJson.data.map((elemento) => elemento.nombre);

  crearGrafico(edad, nombre, vacunas, esterilizado);
  crear.innerHTML = "";
  respuestaJson.data.map((element) => {
    crear.innerHTML += creartarjeta(element);
  });
};




const crearGrafico = (datos, etiquetas, vacunas, esterilizado) => {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: etiquetas,
      fontColor: 'blue',
      datasets: [
        {
          label: "Edad en meses",
          data: datos,
          borderColor: '#111111',
          backgroundColor: [
            "rgba(255, 99, 132, 100)",
            "rgba(255, 159, 64, 100)",
            "rgba(255, 205, 86, 100)",
            "rgba(75, 192, 192, 100)",
            "rgba(54, 162, 235, 100)",
            "rgba(153, 102, 255,100)",
            "rgba(201, 203, 207,100)",
          ],
          borderWidth: 1,
        },
        {
          label: "Vacunas",
          data: vacunas,
          borderColor: '#111111',
          backgroundColor: [
            "rgba(255, 99, 132, 100)",
            "rgba(255, 159, 64, 100)",
            "rgba(255, 205, 86, 100)",
            "rgba(75, 192, 192, 100)",
            "rgba(54, 162, 235, 100)",
            "rgba(153, 102, 255,100)",
            "rgba(201, 203, 207,100)",
          ],
          borderWidth: 1,
        },
        {
          label: "Esterilizado",
          data: esterilizado,
          borderColor: '#111111',
          backgroundColor: [
            "rgba(255,99,132,100)",
            "rgba(255,159,64,100)",
            "rgba(255,205,86,100)",
            "rgba(75,192,192,100)",
            "rgba(54,162,235,100)",
            "rgba(153,102,255,100)",
            "rgba(201,203,207,100)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};
const pasaredadAmeses = (edad) => {
  const arrayEdad = edad.split(" ");
  console.log(arrayEdad);
  if (arrayEdad[1] === "Años" || arrayEdad[1] === "Año") {
    return parseInt(arrayEdad[0]) * 12;
  }
  return parseInt(arrayEdad[0]);
};

const creartarjeta = (data) => {
  const tarjeta = `
  <div class="tarjetaInner">
 
  <img src= ${data.imagen} alt="">

<div class="tarjetaBottom">
<div class="textosBottom">

  <h2 class="textoTarjeta">${data.nombre}</h2>
  <p>&nbsp;</p>
  <h3 class="textoTarjeta">${data.edad}</h3>
  <h3 class="textoTarjeta">${data.comuna}</h3>
  <h3 class="textoTarjeta">${data.desc_personalidad}</h3>
  </div>

  </div>  
  <div class="divWsp">  
  <a target="_blank" href="https://wa.me/+56975467484" class="buttonWsp">
  <i class="wp">¡Contacta a ${data.nombre}!</i>
  <i class="fab fa-whatsapp wp"></i>
</a>
  </div>
  </div>
  
  `;
  return tarjeta;
};

obtenerDatos()
// solicitar.addEventListener("click", obtenerDatos);







// Graficos Finales

document.addEventListener('DOMContentLoaded', function() {
  const urlApi = 'https://huachitos.cl/api/animales';

  // Función para obtener los datos desde la API
  const obtenerDatosDesdeAPI = async () => {
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      return [];
    }
  };

  // Función para generar los gráficos
  const generarGraficos = (datosAnimales) => {
    const perros = datosAnimales.filter(animal => animal.tipo === 'Perro').length;
    const gatos = datosAnimales.filter(animal => animal.tipo === 'Gato').length;

    const esterilizados = datosAnimales.filter(animal => animal.esterilizado).length;
    const noEsterilizados = datosAnimales.length - esterilizados;

    const edades = datosAnimales.map(animal => {
      const arrayEdad = animal.edad.split(" ");
      if (arrayEdad[1] === "Años" || arrayEdad[1] === "Año") {
        return parseInt(arrayEdad[0]) * 12;
      }
      return parseInt(arrayEdad[0]);
    });

    // Gráfico de % de perros versus gatos (circular)
    const ctxPerrosGatos = document.getElementById('graficoPerrosGatos').getContext('2d');

    new Chart(ctxPerrosGatos, {
      type: 'doughnut',
      data: {
        labels: ['Perros', 'Gatos'],
        datasets: [{
          label: '% de Perros y Gatos',
          data: [perros, gatos],
          backgroundColor: ['#D35400', '#273746'],
        }],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white' // Cambia el color del texto de las etiquetas aquí
            }
          }
        }
      }
    });
    

  
    // Gráfico de % de esterilizados (circular)
    const ctxEsterilizado = document.getElementById('graficoEsterilizado').getContext('2d');
    new Chart(ctxEsterilizado, {
      type: 'doughnut',
      data: {
        labels: ['Esterilizados', 'No Esterilizados'],
        datasets: [{
          label: '% de Esterilizados',
          data: [esterilizados, noEsterilizados],
          backgroundColor: ['#FFCE56', '#6E2C00'],
        }],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: 'white' // Cambia el color del texto de las etiquetas aquí
            }
          }
        }
      }
    });

// Gráfico de edades (barras)
const ctxEdad = document.getElementById('graficoEdad').getContext('2d');

new Chart(ctxEdad, {
  type: 'bar',
  data: {
    labels: [...new Set(edades)], // Filtrar edades únicas
    datasets: [{
      label: 'Edades de los Animales',
      data: edades,
      backgroundColor: '#c52c2c',
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white' // Cambia el color del texto de las etiquetas en el eje Y aquí
        }
      },
      x: {
        ticks: {
          color: 'white' // Cambia el color del texto de las etiquetas en el eje X aquí
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white' // Cambia el color del texto de las leyendas aquí
        }
      }
    }
  }
});




    
  };

  // Función principal para iniciar la obtención de datos y generar gráficos
  const iniciar = async () => {
    const datosAnimales = await obtenerDatosDesdeAPI();
    generarGraficos(datosAnimales);
  };

  iniciar(); // Iniciar el proceso al cargar la página
});



