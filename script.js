window.onload = function(){

    //First link element
    var a1=document.querySelector('a:nth-child(1)');

    //Whole nav and all elements whithin
    var nav1=document.querySelector('nav');

    a1.onmouseover=function(){    
        nav1.style.background='purple';
    }
}