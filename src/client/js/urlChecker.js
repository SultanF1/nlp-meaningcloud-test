function checkURL(inputText) {
    let res = inputText.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    if (res){
        return true;
    }
    else{
        alert('invalid URL, try again');
        return false;
    }
}

export { checkURL }
