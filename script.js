let input = document.getElementById("userselected")
let sended = document.getElementById("submite")
let yourchoose = document.querySelector(".yourchoose")
let computer = document.querySelector(".computerchoose")
let result = document.querySelector(".result")
let reset = document.querySelector(".reset")
//computer
const choses = ["Rock","Paper","scissor"]
const rand =Math.floor( Math.random() *3 )
let computerchoose = choses[rand]


let userchoose = ""
input.addEventListener("keyup" ,  () => {
    userchoose = input.value
})
 sended.addEventListener("click" , () => {

    if(userchoose.length != ""){

        yourchoose.innerHTML = userchoose;
        computer.innerHTML = computerchoose;

        if(userchoose === computerchoose ){
            result.innerHTML = "No winner!"
        }else if(userchoose === "Rock"){
            if(computerchoose === "scissor"){
                result.innerHTML = "you win!"
            }else{
                result.innerHTML = "You lost!"
            }
        }else if(userchoose === "scissor"){
            if(computerchoose === "Paper"){
                result.innerHTML = "you win!"
            }else{
                result.innerHTML = "You lost!"
            }
        }
        else if(userchoose === "Paper"){
            if(computerchoose === "Rock"){
                result.innerHTML = "you win!"
            }else{
                result.innerHTML = "You lost!"
            }
        }
    }
})
reset.addEventListener("click" , () => {
   
        yourchoose.innerHTML = ""
        computer.innerHTML = ""
        result.innerHTML = ""
        userchoose = ""
        input.value = ""

})

 


