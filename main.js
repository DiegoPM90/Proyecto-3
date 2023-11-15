const solicitar = document.getElementById("solicitar");
const ctx = document.getElementById("myChart");
const crear = document.getElementById("crearTarjeta");

const urlApi = "https://huachitos.cl/api/animales";
// const urlApiTipo = `https://huachitos.cl/api/animales/tipo/${tipoAnimal}`

const obtenerDatos = async (e) => {
  e.preventDefault();
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

const pasaredadAmeses = (edad) => {
  const arrayEdad = edad.split(" ");
  console.log(arrayEdad);
  if (arrayEdad[1] === "Años" || arrayEdad[1] === "Año") {
    return parseInt(arrayEdad[0]) * 12;
  }
  return parseInt(arrayEdad[0]);
};

const crearGrafico = (datos, etiquetas, vacunas, esterilizado) => {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: etiquetas,
      datasets: [
        {
          label: "Edad en meses",
          data: datos,
          backgroundColor: [
            "rgba(255, 99, 132, 100)",
            "rgba(255, 159, 64, 100)",
            "rgba(255, 205, 86, 100)",
            "rgba(75, 192, 192, 100)",
            "rgba(54, 162, 235, 100)",
            "rgba(153, 102, 255,100)",
            "rgba(201, 203, 207,100)",
          ],
          borderWidth: 2,
        },
        {
          label: "Vacunas",
          data: vacunas,
          backgroundColor: [
            "rgba(255, 99, 132, 100)",
            "rgba(255, 159, 64, 100)",
            "rgba(255, 205, 86, 100)",
            "rgba(75, 192, 192, 100)",
            "rgba(54, 162, 235, 100)",
            "rgba(153, 102, 255,100)",
            "rgba(201, 203, 207,100)",
          ],
          borderWidth: 2,
        },
        {
          label: "Esterilizado",
          data: esterilizado,
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
{
  /* <div class:"tarjeta"> */
}
const creartarjeta = (data) => {
  const tarjeta = `
  <div class="tarjetaInner">
 
  <img src= ${data.imagen} alt="">

<div class="tarjetaBottom">
<div class="textosBottom">

  <h3 class="textoTarjeta">${data.nombre}</h3>
  <h3 class="textoTarjeta">${data.edad}</h3>
  <h3 class="textoTarjeta">${data.comuna}</h3>
  <h3 class="textoTarjeta">${data.desc_adicional}</h3>
  
  </div>
  </div>
  </div>
  `;
  return tarjeta;
};

solicitar.addEventListener("click", obtenerDatos);
