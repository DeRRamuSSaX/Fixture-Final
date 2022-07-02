function handleSubmit(event) {
  event.preventDefault();
  let local = event.target.children[0].textContent;
  let visitante = event.target.children[3].textContent;
  let golesLocal = parseInt(event.target.children[1].value);
  let golesVisitante = parseInt(event.target.children[2].value);

  let ganoLocal = false;
  let empate = false;
  let ganoVisitante = false;
  if (golesLocal > golesVisitante) ganoLocal = true;
  else if (golesLocal < golesVisitante) ganoVisitante = true;
  else if (golesLocal == golesVisitante) empate = true;

  let tds = document.querySelectorAll('td');
  console.log(tds)
  for (let td of tds) {
    if (td.textContent == local || td.textContent == visitante) {
      // esto es si empatan
      if (empate) {
        td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + 1;
        //si empatan tienen 1 punto cada uno
        td.parentElement.children[1].textContent = parseInt(td.parentElement.children[1].textContent) + 1;
      }
      // PJ + 1 = Los partidos jugados cada vez que se apreta
      td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + 1;
    }
    if (td.textContent == local) {
      //si gana local
      if (ganoLocal) {
        td.parentElement.children[3].textContent = parseInt(td.parentElement.children[3].textContent) + 1;
        //diferencia de goles local
        td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + golesLocal - golesVisitante;
        //si gana tendra 3 pts
        td.parentElement.children[1].textContent = parseInt(td.parentElement.children[1].textContent) + 3;
      }
      //si pierde local (no se le suma ningun punto)
      if (ganoVisitante) {
        td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
      }
      // GF = goles a favor del local
      td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesLocal);
      // GC = goles en contra del local
      td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesVisitante);
    }
    if (td.textContent == visitante) {
      //si gana visitante
      if (ganoVisitante) {
        td.parentElement.children[3].textContent = parseInt(td.parentElement.children[3].textContent) + 1;
        //si gana tendra 3 pts
        td.parentElement.children[1].textContent = parseInt(td.parentElement.children[1].textContent) + 3;
      }
      //si pierde visitante
      if (ganoLocal) {
        td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + 1;
      }
      // GF = goles a faovr del visitante
      td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + parseInt(golesVisitante);
      // GC = goles en contra del visitante
      td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + parseInt(golesLocal);
      //diferencia de gol Visitante
      if (ganoVisitante) td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + golesVisitante - golesLocal;
    }
  }
}
