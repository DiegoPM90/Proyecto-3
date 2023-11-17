// Graficos Finales (Perros vs Gatos, Esterilizados, Edad)

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





























// Tarjeta de Animales


// URL de la API para obtener datos de animales
const urlApi = "https://huachitos.cl/api/animales";

// Función principal para obtener los datos de la API y generar tarjetas
const obtenerDatos = async () => {
  try {
    // Hacer la petición a la API
    const response = await fetch(urlApi);
    const respuestaJson = await response.json();
    console.log(respuestaJson);
    
    // Extraer datos relevantes de la respuesta JSON
    const { data } = respuestaJson;

    // Limpiar las tarjetas existentes
    limpiarTarjetas();

    // Crear tarjetas con los datos obtenidos de la API
    data.forEach((element) => {
      crearTarjeta(element);
    });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

// Función para crear una tarjeta con información del animal y agregarla al HTML
const crearTarjeta = (data) => {
  const tarjeta = `
    <div class="tarjetaInner">
      <img src="${data.imagen}" alt="">
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
  const crear = document.getElementById("crearTarjeta");
  crear.innerHTML += tarjeta;
};

// Función para limpiar las tarjetas existentes
const limpiarTarjetas = () => {
  const crear = document.getElementById("crearTarjeta");
  crear.innerHTML = "";
};

// Ejecutar la función principal para obtener datos y generar tarjetas
obtenerDatos();
// solicitar.addEventListener("click", obtenerDatos);




