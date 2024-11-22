const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
var mainimg = document.getElementById("maining");  // Get the main image element
var smallimg = document.getElementsByClassName("small-img");  // Get all small image elements

// Loop through each small image
for (var i = 0; i < smallimg.length; i++) {
    // Add an onclick event to each small image
    smallimg[i].onclick = function() {
        // Change the source of the main image to the clicked small image
        mainimg.src = this.src;  
    }
}