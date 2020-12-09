var contenedor_dos = document.getElementsByClassName("container2")[0];
var contenedor_tres = document.getElementsByClassName("container3")[0];
var icono_palomita = document.getElementById("palomita");
var icono_x = document.getElementById("equis");
var indice_color = 0;


icono_x.addEventListener("click", function(){
  escribirNota();
});

icono_palomita.addEventListener("click", function(){
  crearNota();
});

function escribirNota(){
  if(contenedor_tres.style.display == "none"){
    contenedor_tres.style.display = "block";
  }
  else{
    contenedor_tres.style.display = "none";
  }
}
  
function crearNota(){
  var notaTexto = document.getElementById("texto").value;
  var auxiliarUno = document.createElement("div");
  var auxiliarDos = document.createElement("h1");

  auxiliarDos.innerHTML = notaTexto;

  auxiliarDos.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)")

  auxiliarDos.style.margin = agregar_margen();
  auxiliarDos.style.background = colorAleatorio();
  
  auxiliarUno.appendChild(auxiliarDos);
  
  contenedor_dos.insertAdjacentElement("beforeend", auxiliarUno);

  auxiliarUno.addEventListener("mouseenter", function(){
    auxiliarUno.style.transform = "scale(1.1)";
  })

  auxiliarUno.addEventListener("mouseleave", function(){
    auxiliarUno.style.transform = "scale(1)";
  })

  auxiliarUno.addEventListener("dblclick", function(){
    auxiliarUno.remove();
  })

  document.getElementById("texto").value = '';
}

function agregar_margen(){
  var margen = ["6px","3px", "5px", "10px","15px","20px"];

  return margen[Math.floor(Math.random() * margen.length)];
}

function colorAleatorio(){
  var color = ["#ccf6c8","#fafcc2","#f6d6ad","#fce2ce","#f9c0c0","#c3aed6"];
  if(indice_color > color.length - 1){
    indice_color = 0;
  }
  return color[indice_color++];
}