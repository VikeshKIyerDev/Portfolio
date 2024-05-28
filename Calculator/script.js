let noOfPresses=0
function press(button) {
    text=document.querySelector(".displaytext")
    if (noOfPresses===0 && "123456789".includes(button)) {
        text.innerHTML=button
        noOfPresses+=1
    }
    else if (noOfPresses>0 && "1234567890+-.÷x".includes(button)) {
        text.innerHTML+=button
        noOfPresses+=1
    }
    else if (button === "AC") {
        text.innerHTML="0"
        noOfPresses=0
    }
    else if (button === "%") {
        expression = text.innerHTML.replaceAll("÷","/").replaceAll("x","*")
        expression += "/100"
        calc(expression)
    }
}
function calc(text) {
    expression = text.replaceAll("÷","/").replaceAll("x","*")
    result=eval(expression)
    document.querySelector(".displaytext").innerHTML=result
    noOfPresses=0
}
