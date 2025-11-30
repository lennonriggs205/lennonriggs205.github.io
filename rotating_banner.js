function banner_cycle() {
    const banner = document.getElementById("rotating_banner");
    link = document.getElementById("banner_link");
    const button1 = document.getElementById("banner_button_1")
    const button2 = document.getElementById("banner_button_2")
    const button3 = document.getElementById("banner_button_3")
    banner.classList.remove('fade_in');
    banner.classList.add('fade_out');
    setTimeout(() => {
        if (banner.src.includes('Images/fimbulwinter_banner.png')) {
            banner.src = 'Images/angel_banner.png';
            link.href = "browsers/angel_browser.html";
            button1.style.backgroundColor = "#505050";
            button2.style.backgroundColor = "#717171";
            button3.style.backgroundColor = "#505050";
        } 
        else if (banner.src.includes('Images/angel_banner.png')) {
            banner.src = 'Images/insta_banner.png';
            link.href="https://www.instagram.com/lennon_riggs_writes/";
            button1.style.backgroundColor = "#505050";
            button2.style.backgroundColor = "#505050";
            button3.style.backgroundColor = "#717171";
        }
        else {
            banner.src = 'Images/fimbulwinter_banner.png';
            link.href="browsers/fimbulwinter_browser.html";
            button1.style.backgroundColor = "#717171";
            button2.style.backgroundColor = "#505050";
            button3.style.backgroundColor = "#505050";
        }
        banner.classList.remove('fade_out');
        banner.classList.add('fade_in');
    }, 350);
}

function banner_button_1(){
    const banner = document.getElementById("rotating_banner");
    link = document.getElementById("banner_link");
    const button1 = document.getElementById("banner_button_1")
    const button2 = document.getElementById("banner_button_2")
    const button3 = document.getElementById("banner_button_3")
    banner.src = 'Images/fimbulwinter_banner.png';
    link.href="browsers/fimbulwinter_browser.html";
    button1.style.backgroundColor = "#717171";
    button2.style.backgroundColor = "#505050";
    button3.style.backgroundColor = "#505050";
    banner.classList.remove('fade_out');
    banner.classList.add('fade_in');
}

function banner_button_2(){
    const banner = document.getElementById("rotating_banner");
    link = document.getElementById("banner_link");
    const button1 = document.getElementById("banner_button_1")
    const button2 = document.getElementById("banner_button_2")
    const button3 = document.getElementById("banner_button_3")
    banner.src = 'Images/angel_banner.png';
    link.href = "browsers/angel_browser.html";
    button2.style.backgroundColor = "#717171";
    button1.style.backgroundColor = "#505050";
    button3.style.backgroundColor = "#505050";
    banner.classList.remove('fade_out');
    banner.classList.add('fade_in');
}

function banner_button_3(){
    const banner = document.getElementById("rotating_banner");
    link = document.getElementById("banner_link");
    const button1 = document.getElementById("banner_button_1")
    const button2 = document.getElementById("banner_button_2")
    const button3 = document.getElementById("banner_button_3")
    banner.src = 'Images/insta_banner.png';
    link.href="https://www.instagram.com/lennon_riggs_writes/";
    button3.style.backgroundColor = "#717171";
    button2.style.backgroundColor = "#505050";
    button1.style.backgroundColor = "#505050";
    banner.classList.remove('fade_out');
    banner.classList.add('fade_in');
}

window.onload = function() {
    setInterval(() => {
        banner_cycle();
    }, 7500);
}
