isTheSameAnagram = (string1,string2) => ((string1.split('')).sort()).join('') == ((string2.split('')).sort()).join('')
console.log(isTheSameAnagram('hello','olhel'))

