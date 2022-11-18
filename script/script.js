// Visualizzare in pagina 5 numeri casuali.
// creo il riferimento all'html 
let btn = document.getElementById("start");
btn.addEventListener("click" ,
function () {
  let tempo = document.getElementById("timebar")
  let contGriglia = document.getElementById("griglia");
  contGriglia.innerHTML = "";
  tempo.innerHTML = "";
// creo i 5 numeri casuali 
const arrNum =  genArrNumUniciRandomMinMax(5,1,9);
// creo una variabile che non fa partire la selezione dei tasti 
let gamestart = false;
// creo array della mia tastiera  e li aggiungo all'html
let bottoni = [];
    for (let index = 1; index <= 9; index++) {
        let iteam = document.createElement("button");
        iteam.classList.add("btn" ,"btn-secondary", "box")
        iteam.innerHTML = index;
        let azzeccati = document.getElementsByClassName("hot")
        // inserisco un event listener che permette il funzionamento del gioco
        iteam.addEventListener("click", function () {
          if (azzeccati.length == 4 && iteam.classList.contains("hotted")) {
            alert("hai vinto, ne hai azzeccati: " + (azzeccati.length + 1))
            contGriglia.innerHTML = "";
          }

          else if (iteam.classList.contains("hotted") && gamestart) {
            this.classList.add("hot");


          }else if(!iteam.classList.contains("hotted") && gamestart){
          
            alert("game over, ne hai azzeccati: " + (azzeccati.length))
            contGriglia.innerHTML = "";
          }
        })
        bottoni.push(iteam);
        contGriglia.appendChild(iteam)
        
       
    }
// STAMPA NUMERI 
setTimeout(function () {
  for (let index = 0; index < arrNum.length; index++) {
    let rosso = bottoni[arrNum[index]-1]
    rosso.classList.add("hot","hotted");
    
  }
  
}, 500)
  // rendiamo rossi i bottoni da ricordare 

// Da lì parte un timer di 30 secondi.

  let seconds = 5;
  let timer = setInterval(function () {
console.log(seconds);
   tempo.innerHTML = (seconds);
   if (seconds > 0) {  
      seconds--;
  } else {
    for (let index = 0; index < arrNum.length; index++) {
      let rosso = bottoni[arrNum[index]-1]
      rosso.classList.remove("hot");
      
    }
      gamestart = true;
      clearInterval(timer);
  }

},1000)
  
})


// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.

// creo array di numeri selezionabili 

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
