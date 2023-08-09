const btns = document.querySelectorAll(".btn");
const overlay = document.querySelector(".overlay");
const form = document.querySelector('.callback_form');
const body = document.querySelector("body");
const mores_info =document.querySelectorAll(".more_info");

mores_info.forEach(function(more_info){
    more_info.addEventListener('click',function(){
        overlay.style.display='flex';
        body.style.overflow='hidden';
    })
})

btns.forEach(function(btn) {
    btn.addEventListener('click',function(){
        overlay.style.display='flex';
        body.style.overflow='hidden';
    })
});

form.addEventListener('click',function(e){
    e.stopPropagation();
})

overlay.addEventListener('click',function(){
    overlay.style.display='none';
    body.style.overflow='auto';
})