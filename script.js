function compute()
{
    // Get input values
    var principal = parseFloat( document.getElementById("principal").value );
    var rate = parseFloat( document.getElementById("rate").value );
    var years = parseFloat( document.getElementById("years").value );
    // Validate the values are good
    if (principal <= 0 || isNaN(principal)){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }
    // Calculate the total interest
    var interest = principal * (  ( years * rate / 100 ) )
    // Calculatet the final year
    var today = new Date()
    var year = today.getFullYear() + years;
    // Set the message
    var result = "If you deposit <mark>" + principal + "</mark><br>"
    result += "at an interest rate of <mark>" + rate  + "</mark>.<br>"
    result += "You will receive an amount of <mark>" + interest + "</mark>,<br>"
    result += "in the year <mark>" + year + "</mark>."
    document.getElementById("result").innerHTML  = result;
    // Reset focus to principal element
    document.getElementById("principal").focus(); 
}
        