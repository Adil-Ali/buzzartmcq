const heading  = document.querySelector('.leftside ul li h2');
heading.textContent = 'Hello World';


// const head = document.querySelector('.buttons button');
// head.textContent = 'byby';


document.querySelector('.buttons button').addEventListener('click',
function(){
    alert('ouch! Stop Poking me!');
});


let myImage= document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if(mySrc === 'images\amazonsprite.png'){
        myImage.setAttribute('src','images\amazonsprite.png');

    }else{
        myImage.setAttribute('src','images\image.webp');

    }
}