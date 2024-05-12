// Datos de las tarjetas
const tarjetas = [
    {
      titulo: "Masaje manual relajante",
      descripcion: "La aplicación de diferentes técnicas manuales suaves y controladas sobre los  tejidos corporales, permite conseguir un efecto sedante, analgésico y  relajante casi instantáneo. Reduce el estrés general y otorga sensación de paz y bienestar.",
      precios: [
        { texto: "Espalda, cuello y brazos $3500", link: "../internos/solicitud-turno.html" },
        { texto: "Piernas y pies $3500", link: "../internos/solicitud-turno.html" },
        { texto: "Cuerpo completo $5000", link: "../internos/solicitud-turno.html" }
      ]
    },
    {
      titulo: "Masaje descontracturante",
      descripcion: "Se caracteriza porque en combinación con el masaje relajante,se utilizan técnicas específicas para la eliminación  o disminución de contracturas, puntos de dolor, bloqueos musculares u otras causas de dolor específicas.",
      precios: [
        { texto: "Espalda, cuello y brazos $3500", link: "../internos/solicitud-turno.html" },
        { texto: "Piernas y pies $3500", link: "../internos/solicitud-turno.html" },
        { texto: "Cuerpo completo $5000", link: "../internos/solicitud-turno.html" }
      ]
    },
    // Aquí añadirías los datos de las demás tarjetas
  ];
  
  // Crear elementos de las tarjetas
  const wrap = document.createElement("div");
  wrap.classList.add("wrap");
  
  tarjetas.forEach((tarjetaData, index) => {
    const tarjetaWrap = document.createElement("div");
    tarjetaWrap.classList.add("tarjeta-wrap");
  
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
  
    const adelante = document.createElement("div");
    adelante.classList.add("adelante");
    adelante.classList.add(`card${index + 1}`);
  
    const atras = document.createElement("div");
    atras.classList.add("atras");
  
    const titulo = document.createElement("h1");
    titulo.textContent = tarjetaData.titulo;
  
    const descripcion = document.createElement("p");
    descripcion.textContent = tarjetaData.descripcion;
  
    const listaPrecios = document.createElement("ul");
    listaPrecios.classList.add("precios");
  
    tarjetaData.precios.forEach(precio => {
      const itemLista = document.createElement("li");
      const enlace = document.createElement("a");
      enlace.textContent = "Pedir";
      enlace.href = precio.link;
      itemLista.textContent = precio.texto;
      itemLista.appendChild(enlace);
      listaPrecios.appendChild(itemLista);
    });
  
    // Agregar elementos al DOM
    atras.appendChild(titulo);
    atras.appendChild(descripcion);
    atras.appendChild(listaPrecios);
  
    tarjeta.appendChild(adelante);
    tarjeta.appendChild(atras);
  
    tarjetaWrap.appendChild(tarjeta);
    wrap.appendChild(tarjetaWrap);
  });
  
  // Agregar las tarjetas al documento
  document.body.appendChild(wrap);
  