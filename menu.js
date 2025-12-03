function menu_visible() {
    const menu = document.getElementById("dropdown_menu");
    if (menu.style.visibility === "hidden") {
            menu.style.visibility = "visible";
        } 
    else{
        menu.style.visibility = "hidden";
    }
}
