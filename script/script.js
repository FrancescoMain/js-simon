// Visualizzare in pagina 5 numeri casuali.
let contGriglia = document.getElementById("griglia");
const arrNum =  genArrNumUniciRandomMinMax(5,1,9);
let gamestart = false;

let bottoni = [];
    for (let index = 1; index <= 9; index++) {
        let iteam = document.createElement("button");
        iteam.classList.add("btn" ,"btn-secondary", "box")
        iteam.innerHTML = index
        iteam.addEventListener("click", function () {

          if (iteam.classList.contains("hotted")) {
            this.classList.add("hot");
          }else {
            alert("game over")
            contGriglia.innerHTML = "";
          }
        })
        bottoni.push(iteam);
        contGriglia.appendChild(iteam)
        
       
    }
console.log(bottoni);
// STAMPA NUMERI 
  // rendiamo rossi i bottoni da ricordare 
for (let index = 0; index < arrNum.length; index++) {
  let rosso = bottoni[arrNum[index]-1]
  rosso.classList.add("hot","hotted");
  
}
// Da lì parte un timer di 30 secondi.

  let seconds = 0;
  let timer = setInterval(function () {
   console.log(seconds);
   if (seconds < 5) {  
      seconds++;
  } else {
    for (let index = 0; index < arrNum.length; index++) {
      let rosso = bottoni[arrNum[index]-1]
      rosso.classList.remove("hot");
      
    }
      gamestart = true;
      clearInterval(timer);
  }

},1000)
  

// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.

// creo array di numeri selezionabili 

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
