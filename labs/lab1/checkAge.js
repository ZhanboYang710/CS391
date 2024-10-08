// Below is the funtion that check the user's input age and response 

function checkAge() {

    // get the input value from html webpage
    let age = document.getElementById("input").value
    // create the response
    let response
    // set the display path
    let main = document.getElementById("main-output").style
    let alt = document.getElementById("alt-output").style

    if(isNaN(Number(age))) {
        response = "The input is not a number. Please try again!";
        // hide the display
        alt.display = "block";
        main.display = "none"
        //document.getElementById("alt-output").innerHTML = "Test";
    }

    else if (age < 0) {
        response = "Negative Number is not acceptable!";
        // hide the display
        alt.display = "block";
        main.display = "none";
    }

    else if (age % 1 != 0) {
        response = "The input is not a valid age. Please try again with whole number!";
        // hide the display
        alt.display = "block";
        main.display = "none";
    }
    
    else if (age >= 18 && age <= 120) {
        // make the main content visible
        main.display = "block";
        alt.display = "none";
    }

    else {
        response = "You may not see the content!";
        // hide the display
        alt.display = "block";
        main.display = "none";
    }

    document.getElementById("alt-output").innerHTML = `<p> ${response} </p>`;

    
}

