const btn = document.getElementById("btn");
btn.addEventListener("click", preguntas);

function preguntas() {
  /*donde realisa la pregunta para comenzar*/
  const pregunta = confirm("elige la osccion");

  /*condicion para saber que eligio*/
  if (pregunta == true) alert(`comienza: ${comienzo()}`);
  else {
    alert("adios");
  }
}

/* aqui estan todos las preguntas*/
const todasPreguntas = {
  pregunta1: "cuanto es 2 + 2",
  pregunta2: "Que es mas alto (elfante) o (tigre)",
};

/*funcion para llamar preguntas*/
const comienzo = ({ pregunta1, pregunta2 } = todasPreguntas) => {
  const alerta = prompt(pregunta1);
  const alerta2 = prompt(pregunta2);

  return respuestas(alerta,alerta2);
};

/*funcion para revisar respuestas*/
const respuestas = (alerta,alerta2) => {
  
  if (alerta == '4') alert('correcto');
  else alert('incorreto');

  if(alerta2 == 'elfante') alert('correcto');
  else alert('incorrecta');
}