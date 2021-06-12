//Remove loader

const removeLoader =( ()=>{
    setTimeout(() => {
      
        const loader = document.querySelector("canvas");
        loader.style.display="none";
<<<<<<< HEAD
    },10000)

=======
    },6000);
>>>>>>> f899d42b5d2ad531dbdf4c73394d76178127feb7
})();




//Nav bar Mobile
function openMenu() {
    
    var open = document.querySelector("ul");
    
open.style.right="0%"

}


function closeMenu() {

    var close = document.querySelector("ul");

       
    close.style.right="-1000%"
    
}

// Contact Function

function openContact() {
    
    var open = document.querySelector(".contact");
    open.style.height="100vh";
open.style.top="0%";

}

function closeContact() {

    var close = document.querySelector(".contact");

    
    
close.style.top="-1000%";

}

