// Event  Listeners
// When page loads
window.addEventListener('load', function () {
    $("#fadeIn").fadeIn(5000);
});

/* When the user clicks on the dropdown button, toggle between hiding and showing the dropdown content */
function dropdownMenu() 
{
  	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) 
{   
    // Close the dropdown if the user clicks outside of it
    if (!event.target.matches('.dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) 
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/*Backstretch slideshow for the background*/
$.backstretch([
    "resources/Mountain.jpeg"
    , "resources/beach.jpeg"
    //, "resources/ferns.jpeg"
    , "resources/forest.jpeg"
    //, "resources/lake.jpeg" 
    , "resources/moss.jpg"
    // , "resources/stars.jpeg" 
], {duration: 5000, fade: 3000});	
