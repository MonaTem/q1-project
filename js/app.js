  $(document).ready(function() {

    $(".button-collapse").sideNav();



  });

  document.getElementById('chimera').addEventListener("click", function() {



    var fave = localStorage.getItem("chimera");
    var parent = document.getElementById("Chimera_img");

    if (fave === true) {
      localStorage.setItem("chimera", "false");
      var chimeraFave = document.getElementById("chimera");
      chimeraFave.remove();
      var newAnchor = document.createElement("a");
      newAnchor.innerHTML = '<a class="btn-floating halfway-fab waves-effect waves-light purple" id="chimera"><i class="material-icons" >favorite</i></a>';
      parent.appendChild(newAnchor);


    } else
      localStorage.setItem("chimera", "true");
      var chimeraNotFave = document.getElementById("chimera");
      chimeraNotFave.remove();
      var newA = document.createElement("a");
      newA.innerHTML = '<a class="waves-effect waves-light right" id="chimera" title="Twitter [CC BY 4.0 (http://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons" ><img width="32" alt="Twemoji 1f49c" src="<a class="waves-effect waves-light right" id="chimera" title="Twitter [CC BY 4.0 (http://creativecommons.org/licenses/by/4.0)], via Wikimedia Commons" ><img width="32" alt="Twemoji 1f49c" src="./Images/purpleHeart.png"/></a>';
      parent.appendChild(newA);


  });
