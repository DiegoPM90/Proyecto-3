export const crearTarjeta = (data) => {
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
  