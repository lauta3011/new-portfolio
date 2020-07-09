let scrollPos;
var aboutMeAnim = false;
var skillsAnim = false;
var myWorksAnim = false;

window.addEventListener('scroll', function() {
    scrollPos = document.body.scrollTop;
    
    if(scrollPos > 500 && !aboutMeAnim){
        document.querySelector('#about-me div div').classList.add('enter-left');
        document.querySelector('#about-me h1').classList.add('enter-right');
        document.querySelector('#about-me img').classList.add('enter-right');
        aboutMeAnim =true;
    }else if(scrollPos > 1100 && !skillsAnim){
//        document.querySelector('.chart').classList.add('enter-left');
        document.querySelector('#skills').classList.add('enter-left');
        for(i =0; i< 6;i++){
            document.querySelector('.full-bar .null').classList.add('line');
            document.querySelector('.full-bar .null').classList.remove('null');
        }
        skillsAnim=true;
    }else if(scrollPos > 2200 && !myWorksAnim){
        document.querySelector('#works h1').classList.add('enter-left');
        document.querySelector('#works div').classList.add('enter-right');
        myWorksAnim=true;
    }
});