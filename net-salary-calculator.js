const form=document.getElementById("Salary");
const input=document.getElementById("myPay");
const message=document.getElementById("myPay")
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});

function validateInput(input){ console.log(input.value);
    let grossPay=input.value;
    const NSSF=200; //value of NSSF is Constant 

{   
//conditional statement to evaluate Payee 
//note our code does not cover the whole payee table
 if (grossPay <= 24000){
    payee = (grossPay*0.1)
    console.log(`Your payee is:${payee} Ksh`)
    }
else if (grossPay < 32334){
    payee = (grossPay *0.25)
    console.log(`Your payee is:${payee} Ksh`)
}
else if (grossPay >=32334){
    payee=(grossPay *0.30)
    console.log(`Your payee is:${payee} Ksh`)
}
else
 console.log("input valid number")
 }
 //Conditional statements to evaluate NHIF dedeuctions depending on gross pay amount
if (grossPay < 6000){
    NHIF = 150;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}else if(grossPay < 8000){
    NHIF = 300;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}else if(grossPay < 12000){
    NHIF = 400;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}else if(grossPay < 15000){
    NHIF = 500;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}else if(grossPay < 20000){
    NHIF = 600;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}else if(grossPay < 25000){
    NHIF = 700;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}else if(grossPay < 30000){
    NHIF = 850;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}
else if(grossPay > 35000){
    NHIF = 900;
    console.log(`Your health insurance is:${NHIF} Ksh`)
} else {
    NHIF = 950;
    console.log(`Your health insurance is:${NHIF} Ksh`)
}
deductions = NHIF + payee + NSSF;
console.log(`Your NSSF is:${NSSF} Ksh`)
console.log("your net salary is" ,netPay = grossPay - deductions, "Ksh");

}