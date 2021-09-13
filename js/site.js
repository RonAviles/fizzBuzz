function getValues() {
    //clear the table contents
    document.getElementById("resultsTable").classList.add("invisible");
    document.getElementById("tbodyResults").innerHTML = "";
    //get fizz and buzz values
    let fizz = document.getElementById("fizzVal").value;
    let buzz = document.getElementById("buzzVal").value;
    //parse the values to validate that they are integers
    let fizzInt = parseInt(fizz);
    let buzzInt = parseInt(buzz);
    if (isNaN(fizzInt) && isNaN(buzzInt)) {
        alert("You must enter an integer!");
    } else {
        //create an array of all values 1 - 100 and replace values where appropriate
        let arrOfVals = numbersC(fizzInt, buzzInt);
        //displate values in a table
        displayNumbers(arrOfVals);
    }
}

function numbers(f, b) {
    //initialize an array 
    let arr = []
    //write a loop from 1 - 190==00 
    for (let i = 1; i <= 100; i++) {
        if (i % f == 0 && i % b == 0) {
            //check if iteration is divisible by fizz and buzz values if so then push appropraite value into array 
            arr.push("FizzBuzz");
        } else if (i % b == 0) {
            arr.push("Buzz");
            //check if iteration is divisible by buzz value
        } else if (i % f == 0) {
            arr.push("Fizz");
            //check if iteration is divisible by fizz value
        } else {
            arr.push(i);
            //if neither then push iteration number into array 
        }

    }
    return arr
}

//version B using booleans in a switch case model
function numbersB(f, b) {
    let returnArr = [];
    let fizz = false;
    let buzz = false;

    for (let i = 1; i < 100; i++) {
        fizz = i % f == 0;
        buzz = i % b == 0;

        switch(true){
            case fizz && buzz:{
                returnArr.push("FizzBuzz");
                break;
            }
            case fizz:{
                returnArr.push("Fizz");
                break;
            }
            case buzz:{
                returnArr.push("Buzz");
                break;
            }
            default:{
                returnArr.push(i);
                break;
            }
        }
    }
    return returnArr;
}

//version C using ternary operators
function numbersC(f, b) {
    let returnArr = [];
    for (let i = 1; i <= 100; i++) {
        let value = ((i % f == 0 ? "Fizz" : "")+(i % b == 0 ? "Buzz" : "") || i);
        returnArr.push(value);      
    }
    return returnArr;
}

function displayNumbers(arr) {
    //get the table body from the page
    let tableBody = document.getElementById("tbodyResults");
    //get the template 
    let templateRow = document.getElementById("fbTemplate");
    //create a loop to iterate through the new array
    for (let i = 0; i < arr.length; i+=5) {
        let tableRow = document.importNode(templateRow.content, true);
        //grab just the td and put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(arr[i]);
        rowCols[0].textContent = arr[i];

        rowCols[1].classList.add(arr[i+1]);
        rowCols[1].textContent = arr[i+1];

        rowCols[2].classList.add(arr[i+2]);
        rowCols[2].textContent = arr[i+2];

        rowCols[3].classList.add(arr[i+3]);
        rowCols[3].textContent = arr[i+3];

        rowCols[4].classList.add(arr[i+4]);
        rowCols[4].textContent = arr[i+4];

        tableBody.appendChild(tableRow);
    }
    //make table visible
    document.getElementById("resultsTable").classList.remove("invisible");
}