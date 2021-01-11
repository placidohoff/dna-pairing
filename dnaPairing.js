/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    let arrStr = str.split('');
    let finalArray = [];

    for(let i = 0; i < arrStr.length; i++){
        let arrPair = getBasePair(arrStr[i])
        finalArray.push(arrPair)
    }
     
    return finalArray;
}

function getBasePair(char){
    let arrPair = [];
    arrPair.push(char);

    if(char == 'A')
        arrPair.push('T')
    else if(char == 'T')
        arrPair.push('A')
    else if(char == 'C')
        arrPair.push('G')
    else if(char == 'G')
        arrPair.push('C')

    return arrPair;
}

console.log(pairElement("CTCTA"));