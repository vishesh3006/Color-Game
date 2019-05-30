var h1 = document.querySelector("h1");
var current = 6;
var colors = generateRandomColors(current);
// var outcome = document.querySelector(".outcome");
var squares = document.getElementsByClassName("square");
var codeheading = document.querySelector(".anscode");
var reset = document.querySelector(".reset");
var hard = document.querySelector(".hard");
var easy = document.querySelector(".easy");


easy.addEventListener("click", function(){
reset.textContent = "New Colors";
hard.classList.remove("active");
this.classList.add("active");
current = 3;
colors = generateRandomColors(current);
for(var i = 0; i<current; i++)
    squares[i].style.backgroundColor = colors[i];
    
squares[3].style.backgroundColor = "black";
squares[4].style.backgroundColor = "black";
squares[5].style.backgroundColor = "black";

pickedcolor = pickcolor();
codeheading.textContent = pickedcolor;
// outcome.textContent = "";
});


hard.addEventListener("click", function(){
    reset.textContent = "New Colors";
    easy.classList.remove("active");
    this.classList.add("active");
    current = 6;
    colors = generateRandomColors(current);
    for(var i = 0; i<current; i++)
        squares[i].style.backgroundColor = colors[i];
    pickedcolor = pickcolor();
    codeheading.textContent = pickedcolor;
    // outcome.textContent = "";
})





for(var i = 0; i<colors.length; i++)
    squares[i].style.backgroundColor = colors[i];

var pickedcolor = pickcolor();
codeheading.textContent = pickedcolor;

for(var i = 0; i<current; i++)
{
    squares[i].addEventListener("click", function(){

        if(pickedcolor == this.style.backgroundColor)
        {
            h1.style.backgroundColor = pickedcolor;
            // outcome.textContent = "Correct!";
            reset.textContent = "Play Again?"
            for(var i=0; i<current; i++)
            {
                squares[i].style.backgroundColor = pickedcolor ;
            }
        }

        else
        {   
            this.style.backgroundColor = "black";
            // outcome.textContent = "Try Again!";
       }
     });
}

reset.addEventListener("click", function(){
    this.textContent = "New Colors";
    colors = generateRandomColors(current);
    
    for(var i = 0; i<current; i++)
        squares[i].style.backgroundColor = colors[i];
    
    pickedcolor = pickcolor();
    codeheading.textContent = pickedcolor;
    // outcome.textContent = "";
})

function pickcolor()
{
    var anskey = Math.floor(Math.random() * current);
    return colors[anskey];
}

function generateRandomColors(num)
{
    var arr = [];
    for(var i=0; i<num; i++)
    {
        arr.push(generateColor());
    }
    return arr;
}

function generateColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
