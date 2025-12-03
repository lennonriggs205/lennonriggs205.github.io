function menu_visible() {
    const menu = document.getElementById("dropdown_menu");
    const current_visibility = getComputedStyle(menu).visibility;
    if (current_visibility === "hidden") {
            menu.style.visibility = "visible";
        } 
    else{
        menu.style.visibility = "hidden";
    }
}
