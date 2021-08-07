AOS.init();
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const overlay = document.querySelector(".overlay");
const therest = document.querySelector(".therest");


function scrollDown(){
    window.scrollBy(0, window.innerHeight);
};



menuToggle.addEventListener("click", ()=>{
    menuToggle.classList.toggle("active");
    showcase.classList.toggle("active");
    overlay.classList.toggle("active");
    therest.classList.toggle("active");
})


function scrollanimation(element, classname){
    console.log(document.querySelector(`.${element}`));
    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            // $(element).addClass(classname);
            document.querySelector(`.${element}`).classList.add(classname);
        }
        else 
        {
            $(element).removeClass(classname); 
            document.querySelector(`.${element}`).classList.remove(classname);

        }
    })
};
scrollanimation("svglogo", "another");
scrollanimation("header", "black");
