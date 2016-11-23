// initialise la fenêtre
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
//attrappe l'élément de fermeture
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
//bouton fermer
span.onclick = function() {
    modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
   images[i].onclick = function(){
       modal.style.display = "block";
       modalImg.src = this.src;
       modalImg.alt = this.alt;
       captionText.innerHTML = this.nextElementSibling.innerHTML;
   }
}
//confirm("Bienvenu sur le site d'Iron ! N'ayez pas peur je ne mords pas!!");
//$(document).ready(function(){
    //$("#flip").click(function(){
      //  $("#panel").fadeToggle("slow");
  //  });
//});
