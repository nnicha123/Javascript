checkCharacter = (str) => {
    if(typeof str == 'string'){
        if(str == str.toUpperCase()) return 'All characters are capital';
        else if(str == str.toLowerCase()) return 'All characters are small';
        else return 'All characters are mix'
    }
    return 'Not string';    
}
console.log(checkCharacter('HELLO'));