function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; 
        } else {
            return num * 3; 
        }
    });
}



function modifyStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error("The two arrays must have the same length.");
    }

    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();  
        } else {
            return str.toLowerCase(); 
        }
    });
}


const strings = ["James", "Leslie", "Oswald", "Terrence", "Reiss"];
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); 
const modifiedStrings = modifyStrings(strings, processedNumbers);
console.log(modifiedStrings); 