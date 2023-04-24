console.log("This is java script file of project 7");
let screen = document.getElementById('screen');
let screenValue = "";
buttons = document.querySelectorAll('button');
for (item of buttons) {
    
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(buttonText)

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText =='←') {
            screenValue=screenValue.toString().substring(0,screenValue.length-1)
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);
                screenValue=screen.value;
            } catch (error) {
                screen.value=" ☺☺♂☺ERROR!!☺♂☺☺"

            }
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}