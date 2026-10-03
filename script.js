console.log("hello world")

const screen = document.getElementById("display")
const button = document.querySelectorAll(".buttons button")

console.log(button)

function press(value){
    if(value === 'C'){
        screen.value = "";
    } else if(value === 'DEL'){
        screen.value = screen.value.slice(0, -1);
    } else if(value === '='){
        try {
            screen.value = eval(screen.value);
        } catch {
            screen.value = "Error";
        }
    } else {
        screen.value += value;
    }
}
n = button.length;

for(let i = 0 ; i < n ; i++){
    button[i].addEventListener("click",function(){
        press(button[i].textContent)
    })
}

console.log("loop finished")
