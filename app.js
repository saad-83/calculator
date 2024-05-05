for (var j = 1; j > 0; j++) {
    for (var k = 1; k > 0; k++) {
        var CnvrtInto = prompt("Press   1 for USD to PKR   AND   Press  2 for PKR to USD");
        if (CnvrtInto === "1") {
            var AmountToConvert = prompt("Enter Amount To Convert USD into PKR");
            var CnvrtedValue = AmountToConvert * 280;
            CnvrtedValue = CnvrtedValue.toFixed(2);
            break;
        }
        else if (CnvrtInto === "2") {
            var AmountToConvert = Number(prompt("Enter Amount To Convert PKR into USD"));
            var CnvrtedValue = AmountToConvert / 280;
            CnvrtedValue = CnvrtedValue.toFixed(2);
            break;
        }
        else {
            alert("Please enter correct value only 1 or 2");
        }
    }
    alert("The Amount is  " + CnvrtedValue);
    for (var i = 1; i > 0; i++) {
        var ToRestart = prompt("Restart the program press  1 AND Close the program press  2 ");
        if (ToRestart === "1") {
            break;
        }
        else if(ToRestart==="2"){
            break;
        }
        else {
            alert("Please Only Type 1 or 2");
        }
    }
    if(ToRestart==="2"){
        break;
    }
}