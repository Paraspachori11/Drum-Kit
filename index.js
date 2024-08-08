var btnArray = document.querySelectorAll(".drum");
var size = btnArray.length;
var i;

for(i = 0; i<size; i++)
{
    btnArray[i].addEventListener("click",function(){

        var btnValue = this;
        pressEffect(btnValue);
        soundGenerate(btnValue.textContent);

    })
}

document.addEventListener("keypress",function(event){
    pressEffect(document.getElementsByClassName(event.key)[0]);
    soundGenerate(event.key);
});

function soundGenerate(ch)
{
    var audio;
    switch(ch)
        {
            case 'w':
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;

            case 'a':
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;

            case 's':
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;

            case 'd':
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;

            case 'j':
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;

            case 'k':
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;

            case 'l':
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;

            default:
                break;
        }
}

function pressEffect(element){
    element.classList.add("pressed");
    setTimeout(function(){
        element.classList.remove("pressed");
    },100);
}