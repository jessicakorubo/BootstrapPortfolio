const navlinks = document.querySelectorAll('.navbar-nav nav-link');

navlinks.forEach(nav => {
    nav.addEventListener('click', ()=>{
        console.log('Printed');
        nav.classList.toggle('active');
    })
})