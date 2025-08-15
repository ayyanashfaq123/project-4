const nav=document.querySelector("nav")
nav.style.transition = '3.7s'
const sideBar=document.querySelector('.side-bar')
function showNav() {
    if(nav.style.display === 'none'){
        nav.style.display = 'block'
        // sideBar.innerHTML =<i class="fa-solid fa-xmark"></i>
    }else{
        nav.style.display = 'none'
    }
}