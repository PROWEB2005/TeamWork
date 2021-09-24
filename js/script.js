// Loader
const loader = document.querySelector('.loader');
window.addEventListener('load', function(){

    loader.style.opacity = '0';
});
const section = document.querySelectorAll('section');
let pnLink = document.querySelectorAll('.panel__link')
let indicator = document.querySelector('.indicator')
for (let i = 0; i < section.length; i++) {
    section.forEach(sect => {
        pnLink[i].addEventListener('click', function(){
            indicator.innerHTML = pnLink[i].innerHTML
            sect.classList.remove('active');
            section[i].classList.add('active');
        });
    });
}
$('.panel__link').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});
// Scroll animation
AOS.init();
const menuBtn = document.querySelector('.menu-btn');
const panel = document.querySelector('.panel');
const disMenu = document.querySelector('.disMenu');

menuBtn.addEventListener('click', function(){
    panel.classList.add('active');
    menuBtn.style.display = 'none'
    
    panel.addEventListener('click', function(){
        
        panel.classList.remove('active');
        menuBtn.style.display = 'block'

    });
    disMenu.addEventListener('click', function(){

        panel.classList.remove('active');
        menuBtn.style.display = 'block'
    });
});
const buttons = document.querySelector('.home__header__btn');
buttons.addEventListener('click', function(e) {

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.style.left = x - 200 + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(() => {
        ripples.remove()
    },500);
});
// Day night mode

$('.sun').click(function(){
    $('main').removeClass('night')
    $('main').addClass('day')
    $('.moon').removeClass('active')
    $(this).addClass('active')
});
$('.moon').click(function(){  
    $('main').removeClass('day')
    $('main').addClass('night')
    $('.sun').removeClass('active')
    $(this).addClass('active')
});
// Accordion
const accordion = document.querySelectorAll('.accordion');
accordion.forEach(accor => {
    accor.addEventListener('click', function(){
        this.classList.toggle('active');
        var accordionPanel = this.nextElementSibling
        if (accordionPanel.style.maxHeight) {
            accordionPanel.style.maxHeight = null;
        }
        else{
            accordionPanel.style.maxHeight = accordionPanel.scrollHeight + 'px';       
        }
    });
});
const counters =  document.querySelectorAll('.wehave__title');
for (let i = 0; i < counters.length; i++) {
    counters[i].innerHTML + '+'
}
$('.wehave__title').counterUp({
    delay: 10,
    time: 1500
})
const sendBtn = document.querySelector('.rateus__btn');
const editBtn = document.querySelector('.rateus__post__exit');
const post = document.querySelector('.rateus__post');
const starWidget = document.querySelector('.star_widget');
sendBtn.addEventListener('click', function(){
    starWidget.style.display = 'none';
    post.style.display = 'block';
})
editBtn.addEventListener('click', function(){
    starWidget.style.display = 'block';
    post.style.display = 'none';
})
