function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou",
        "Sultan"
    ]

    if(names.includes(inputText)) {
        alert("Welcome!")
        return true;
    }
    else{
        alert('Name is not valid, Try again');
        return false;
    }
}

export { checkForName }
