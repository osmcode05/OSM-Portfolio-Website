// < ==================== MENU ====================== >
let menu = document.getElementById('menu'),
    close = document.getElementById('close'),
    list = document.querySelector('.navbar-nav');
function toggleMenu() {
    menu.classList.toggle('d-none');
    close.classList.toggle('d-none');
    list.classList.toggle('end-0');
}
menu.addEventListener('click',toggleMenu)
close.addEventListener('click',toggleMenu)
// < ==================== Scroll Up Button ====================== >
let btnScroll= document.getElementById('btnScroll');
btnScroll.onclick = ()=> scroll({top:0})
onscroll = ()=> (scrollY >= 250)?btnScroll.classList.add('bottom-0'):btnScroll.classList.remove('bottom-0')
