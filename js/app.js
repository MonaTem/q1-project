/*  $(document).ready(function() {

    $(".button-collapse").sideNav();

  });

  */


if (ON_INDEX) {

  checkLocalStorage();

}  else {

     var monsterName = document.querySelector("card-title").textContent;

     if (monsterName === MONSTERNAME) {

       monsterName.addEventListener("click", function() {

          checkLocalStorage();
          removeLocalStorage();
          monsterList = monsterFaves;
          storeArray();


       });

     }
}


function checkLocalStorage() {
  if(!localStorage.getItem('monsterInfo')) {
     populateStorage();
} else {
    checkMonsterFaves();

}
}

function populateStorage() {

var monsterList = [];

monsterList = document.getElementsByClassName('monsters');

 for (i=0; i< monsterList.length; i++) {
    let myObj = {};
    myObj.name = document.querySelector("title");
    myObj.fave = false;
    monsterList.push(myObj);
  }

}

function storeArray(monsterList) {

localStorage.setItem("monsterInfo", JSON.stringify(monsterList));

}

function checkMonsterFaves() {

var monsterFaves = JSON.parse(localStorage.getItem('monsterInfo'));

for (i=0; i< monsterFaves.length; i++) {

  if (monsterFaves[i].fave && ON_INDEX) {
    favIconIndex(monsterFaves[i]);
  }

  if (!ON_INDEX) {

    let hidden = document.querySelector(".hide");
    hidden.classList.toggle("hide");
    hidden.classList.toggle("unhide");
    let visible = document.querySelector(".unhide");
    visible.classList.toggle("unhide");
    visible.classList.toggle("hide");

    if (monsterFaves[i].fave) {
        monsterFaves[i].fave = false;
    } else {
        monsterFaves[i].fave = true;
    }

  }

 }

}


function favIconIndex(myObj) {

 if (document.querySelector("title")  === myObj.name) {

   let hidden = document.querySelector(".hide");
   hidden.classList.toggle("hide");

 }

}
function removeLocalStorage() {
   localStorage.removeItem("monsterInfo");
}
