// drop-down menu
let dropdownButton = document.getElementById("dropdown");
let dropdownMenu = document.getElementById("dropdown-menu");

dropdownButton.onclick = function(){
    if (dropdownMenu.style.height === "0px"){
        dropdownMenu.style.height = "248px";
    }else{
        dropdownMenu.style.height = "0px"
    }
}
