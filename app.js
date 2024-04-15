//button toggle
const togglemenu = document.querySelector('#toggle-menu')
const toggleicon=togglemenu.querySelector('img')
const menu=document.querySelector('#menu')
togglemenu.addEventListener('click',()=>{
    console.log('toggle menu clicked')
menu.classList.toggle('translate-y-[-200%]')
changeicon();
});

//icon change
const changeicon=()=>{
const translate=menu.classList.contains('translate-y-[-200%]');
const icon=translate ? 'menu' : "close"
toggleicon.src=`./images/${icon}.svg`
}

//close menu when click
const navlink=document.querySelectorAll('.nav-link')
navlink.forEach(navlink=>{
    navlink.addEventListener('click',()=>{
        console.log('navlink clicked')
        menu.classList.add('translate-y-[-200%]')
    })
    changeicon();
})


//dark
const html=document.querySelector('html');
const togtheme =document.querySelector('#theme');
const togglethemeicon=togtheme.querySelector('img'); 

togtheme.addEventListener('click',()=>{
    html.classList.toggle('dark')
    const isdark=html.classList.contains('dark')
 const thicon=isdark ? 'light' :'dark'
 togglethemeicon.src=`./images/${thicon}.svg`
})



