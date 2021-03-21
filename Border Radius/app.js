const number = document.querySelector("#binaryNumber");
const buttonTrigger = document.querySelector("input[type=\"submit\"]");
const decimalNumber = document.querySelector("#decimalNumber");

buttonTrigger.addEventListener('click',e=>{
    if(numberOrNotCheck(number.value)){
        alert("Please enter a binary number");
    }
    else if(isBinary(number.value) && number.value.length <= 8){
        let convertedValue = 0;
        const answer = convertToDecimal(convertedValue,number.value);
        decimalNumber.value = answer; 
        }
    else if(!isBinary(number.value)){
        alert("Number is not Binary Number");
    }
    else if(number.value.length > 8){
        alert("Please Enter value of length less than 8")
    }
   
})

const numberOrNotCheck = (number)=>{
    return isNaN(number);
}
const isBinary = (number)=>{
    for(let i = 0 ; i < number.length;i++) {
        if(number[i] != 1 && number[i] != 0) return false;
    }
    return true;
}
const convertToDecimal = (convertedValue,value)=>{
    for(let i = 0 ; i < value.length;i++){
        convertedValue += Number(value[i]) * Math.pow(2,i); 
    }
    return convertedValue;
}