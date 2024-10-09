let calculator="";
    let strcalc2 = document.querySelectorAll('.buttons');
    Array.from(strcalc2).forEach(btn => {
        btn.addEventListener('click',(e)=>{
            if(e.target.innerHTML== '='){
                calculator=eval(calculator);
            document.querySelector('input').value=calculator;
            }
            else if(e.target.innerHTML=="C"){
                calculator="";
                document.querySelector('input').value=calculator;

            }
            else{
            console.log(e.target)
            calculator=calculator+e.target.innerHTML;
            document.querySelector('input').value=calculator;}
        })
        
    });
