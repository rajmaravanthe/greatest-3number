var i = 0;
var greatest = 0;
while (i<3) {
    var enteredNumber = parseInt(prompt("Enter "+ (i+1) + " number")) // enter number and index+1 since it start from zero 
    if(enteredNumber > greatest) {
        greatest = enteredNumber;
    }
    i++
}
document.write("Greatest number is "+greatest);
console.log("Greatest number is "+greatest); // consoling the output;