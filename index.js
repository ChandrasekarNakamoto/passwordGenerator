
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let firstPassword=""
let secondPassword=""
let randomnumber1=0
let randomnumber2=0
let i=0


function password() {

    for (i=0; i<15; i++){
        randomnumber1= Math.floor(Math.random()*characters.length)
        randomnumber2= Math.floor(Math.random()*characters.length)
    
        firstPassword += characters[randomnumber1]
        secondPassword += characters[randomnumber2]
    }
        document.getElementById("passone").textContent = firstPassword
        document.getElementById("passtwo").textContent = secondPassword

        firstPassword=""
        secondPassword=""
}
