function mature_content() {
    const mature = document.getElementById('mature');
    mature.style.visibility = 'hidden';
    sessionStorage.setItem('mature_confirmed', 'true');
}
window.onload = function() {
    const mature = document.getElementById('mature');
    if (sessionStorage.getItem('mature_confirmed') === 'true') {
        mature.style.visibility = 'hidden';
    } 
    else {
        mature.style.visibility = 'visible';
    }
};