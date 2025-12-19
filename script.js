let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        let value = e.target.innerHTML;
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'C'){
            string =""
            document.querySelector('input').value = string;
        }

        else if (value === '%') {
            string = (eval(string) / 100).toString();
            document.querySelector('input').value = string;
        }

        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})