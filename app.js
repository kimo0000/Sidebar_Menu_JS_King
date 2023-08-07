const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const btnClose = document.querySelector('#btn_close');

menu.addEventListener('click', (event) => {
    sidebar.classList.toggle('show_menu');
    if(sidebar.classList.contains('show_menu')) {
       menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
})

btnClose.addEventListener('click', (event) => {
    if(sidebar.classList.contains('show_menu')) {
       sidebar.classList.remove('show_menu');
       menu.classList.remove("active");
    } 
})