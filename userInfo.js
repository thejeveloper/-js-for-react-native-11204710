function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;
        } else {
            return num * 3; 
        }
    });
}

function createUserProfiles(names, processedNumbers) {
    return names.map((name, index) => {
        let modifiedName;
        if (processedNumbers[index] % 2 === 0) {
            modifiedName = name.toUpperCase();
        } else {
            modifiedName = name.toLowerCase(); 
        }
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedName
        };
    });
}


const names = ["James", "Leslie", "Oswald", "Terrence", "Reiss"];
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
const userProfiles = createUserProfiles(names, processedNumbers);
console.log(userProfiles);
