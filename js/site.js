
// Get the string from the page
//Conttoller function
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementsByClassName("userString").value;

    let revString = reverseString(userString);

    displayString(revString);
}

//Reverse the string
//logic function
function reverseString(userString) {

    let revString = [];

    //reverse a string using a for loop
    for (let index = userString.length -1; index >= 0; index--) {
        revString += userString[index];        
    }

    return revString;

}


//Display the string to the user
//View function
function displayString(revString) {

    //write to the page
    document.getElementById("msg").innerHTML = `Your String Reversed Is: ${revString}`;
    //show the alert box

}
