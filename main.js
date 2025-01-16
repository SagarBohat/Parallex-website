 const navslide=()=>{
var burger=document.querySelector('.burger');
var menu=document.querySelector('.menu');
var menuitems=document.querySelectorAll('.menu li');

burger.addEventListener('click',function () {
menu.classList.toggle('isactive');
burger.classList.toggle('toogel');
menuitems.forEach((link,index)=>{
    if(link.style.animation){
        link.style.animation=``;
    }
    else{
        link.style.animation=`menuFade 0.5s ease forwards ${index/7+0.5}s`;

    }
});



});
}
navslide();