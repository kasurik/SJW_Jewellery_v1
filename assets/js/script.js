document.getElementById('myDiscountCard').addEventListener('click', function() {
    this.classList.toggle('flipped');
  });



/*   var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
this.classList.toggle("active");
var content = this.nextElementSibling;
if (content.style.maxHeight) {
  content.style.maxHeight = null;
} else {
  content.style.maxHeight = content.scrollHeight + "px";
}

});
}*/

const toggleButton = document.getElementById('toggleButton');
    const myContent = document.getElementById('myContent');

    toggleButton.addEventListener('click', function() {
        if (myContent.style.display === 'none' || myContent.style.display === '') {
            myContent.style.display = 'block'; // Show content
        } else {
            myContent.style.display = 'none'; // Hide content
        }
    });
