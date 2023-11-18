   
const ctx = document.getElementById("myChart");
export const crearGrafico = (datos, etiquetas, vacunas, esterilizado) => {
    //  export const funcionaPorfa = () => console.log('Hola mundo');
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

  