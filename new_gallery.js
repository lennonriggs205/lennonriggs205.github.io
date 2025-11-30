function image_cycle_left() {
    const caption = document.getElementById("caption");
    const left_image = document.getElementById('left_image');
    const middle_image = document.getElementById('middle_image');
    const right_image = document.getElementById('right_image');
    left_image.classList.remove('fade_in');
    middle_image.classList.remove('fade_in');
    right_image.classList.remove('fade_in');
    caption.classList.remove('fade_in');
    left_image.classList.add('fade_out');
    middle_image.classList.add('fade_out');
    right_image.classList.add('fade_out');
    caption.classList.add('fade_out');
    setTimeout(() => {
        if (left_image.src.includes('Images/angel_20.png')) {
            left_image.src = 'Images/world_sculptor.png';
            middle_image.src = 'Images/hel_1.png';
            right_image.src = 'Images/angel_20.png';
            caption.textContent = "A valkyrie is forced to shepherd the man who killed her brother to Valhalla, but if she has her way, he won’t stay there for long.";
        } 
        else if (left_image.src.includes('Images/world_sculptor.png')) {
            left_image.src = 'Images/hel_1.png';
            middle_image.src = 'Images/angel_20.png';
            right_image.src = 'Images/world_sculptor.png';
            caption.textContent = "When they’re discovered by the Order of Tyrus, Cass starts a brawl to get Kayla and her off the arctrain.";
        } 
        else {
            left_image.src = 'Images/angel_20.png';
            middle_image.src = 'Images/world_sculptor.png';
            right_image.src = 'Images/hel_1.png';
            caption.textContent = "In a distant office, an artist begins a monumental new project. Its name? Earth.";
        }

        left_image.classList.remove('fade_out');
        middle_image.classList.remove('fade_out');
        right_image.classList.remove('fade_out');
        caption.classList.remove('fade_out');
        left_image.classList.add('fade_in');
        middle_image.classList.add('fade_in');
        right_image.classList.add('fade_in');
        caption.classList.add('fade_in');
    }, 350);
}
function image_cycle_right() {
    const caption = document.getElementById("caption");
    const left_image = document.getElementById('left_image');
    const middle_image = document.getElementById('middle_image');
    const right_image = document.getElementById('right_image');
    left_image.classList.remove('fade_in');
    middle_image.classList.remove('fade_in');
    right_image.classList.remove('fade_in');
    caption.classList.remove('fade_in');
    left_image.classList.add('fade_out');
    middle_image.classList.add('fade_out');
    right_image.classList.add('fade_out');
    caption.classList.add('fade_out');
    setTimeout(() => {
        if (right_image.src.includes('Images/angel_20.png')) {
        left_image.src = 'Images/angel_20.png';
        middle_image.src = 'Images/hel_1.png';
        right_image.src = 'Images/world_sculptor.png';
        caption.textContent = "A valkyrie is forced to shepherd the man who killed her brother to Valhalla, but if she has her way, he won’t stay there for long.";
    } 
    else if (right_image.src.includes('Images/world_sculptor.png')) {
        left_image.src = 'Images/world_sculptor.png';
        middle_image.src = 'Images/angel_20.png';
        right_image.src = 'Images/hel_1.png';
        caption.textContent = "When they’re discovered by the Order of Tyrus, Cass starts a brawl to get Kayla and her off the arctrain.";
    } 
    else {
        left_image.src = 'Images/hel_1.png';
        middle_image.src = 'Images/world_sculptor.png';
        right_image.src = 'Images/angel_20.png';
        caption.textContent = "In a distant office, an artist begins a monumental new project. Its name? Earth.";
    }
        left_image.classList.remove('fade_out');
        middle_image.classList.remove('fade_out');
        right_image.classList.remove('fade_out');
        caption.classList.remove('fade_out');
        left_image.classList.add('fade_in');
        middle_image.classList.add('fade_in');
        right_image.classList.add('fade_in');
        caption.classList.add('fade_in');
    }, 350);
}
window.onload = function() {
    setInterval(() => {
        image_cycle_right();
    }, 25000);
}
