const form=document.getElementById("Salary");
const input=document.getElementById("myPay");
const message=document.getElementById("myPay")
form.addEventListener("submit",(event) => {event.preventDefault();
validateInput(input);
});

   
//conditional statement to evaluate PAYE
 if (grossPay <= 24000){
    PAYE = (grossPay*0.1)
    console.log(`Your PAYE is:${paye} Ksh`)
    }
else if (grossPay < 32334){
    PAYE = (grossPay *0.25)
    console.log(`Your PAYE is:${paye} Ksh`)
}
else if (grossPay >=32334){
    PAYE=(grossPay *0.30)
    console.log(`Your PAYE is:${paye} Ksh`)
}

else if (grossPay < 800001){
    PAYE=(grossPay *0.325)
    console.log(`Your PAYE is:${paye} Ksh`)
}

else if (grossPay > 800000){
    PAYE=(grossPay *0.325)
    console.log(`Your PAYE is:${paye} Ksh`)
}

else
 console.log("input valid number")
 }


 //Conditional statements to evaluate NHIF deductions depending on gross pay
if (grossPay < 6000){
    NHIF = 150;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 8000){
    NHIF = 300;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 12000){
    NHIF = 400;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 15000){
    NHIF = 500;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 20000){
    NHIF = 600;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 25000){
    NHIF = 700;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 30000){
    NHIF = 850;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}

else if(grossPay < 35000){
    NHIF = 900;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 40000){
    NHIF = 950;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 45000){
    NHIF = 1000;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 50000){
    NHIF = 1100;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 60000){
    NHIF = 1200;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 70000){
    NHIF = 1300;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 80000){
    NHIF = 1400;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 90000){
    NHIF = 1500;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 

else if(grossPay < 100000){
    NHIF = 1500;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
} 


else (grossPay > 100000){
    NHIF = 1700;
    console.log(`Your NHIF deduction is:${NHIF} Ksh`)
}



//conditional statement to evaluate NSSF deductions based on gross pay
if (grossPay > 0 && grossPay <= 18000){
    NSSF = grossPay*0.6;
    console.log(`Your NSSF deduction is:${NSSF} Ksh`)
    }



deductions = NHIF + PAYE + NSSF;
console.log(`Your NSSF is:${NSSF} Ksh`)
console.log("your net salary is" ,netPay = grossPay - deductions, "Ksh");

}