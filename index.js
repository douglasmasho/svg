const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const overlay = document.querySelector(".overlay");
const therest = document.querySelector(".therest");



menuToggle.addEventListener("click", ()=>{
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
    overlay.classList.toggle("active");
    therest.classList.toggle("active");
})


function scrollanimation(element, classname){
    $(window).on('scroll', function(){
    console.log("juinuiunb");
        if ($(window).scrollTop()){
            $(element).addClass(classname);
        }
        else 
        {
            $(element).removeClass(classname);   
        }
    })
};

scrollanimation("header", "black");