function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // square the even numbers
        } else {
            return num * 3; // triple the odd numbers
        }
    });
}

function createUserProfiles(names, processedNumbers) {
    return names.map((name, index) => {
        let modifiedName;
        if (processedNumbers[index] % 2 === 0) {
            modifiedName = name.toUpperCase(); // capitalize if even
        } else {
            modifiedName = name.toLowerCase(); // lowercase if odd
        }
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedName
        };
    });
}

// Example usage:
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
const userProfiles = createUserProfiles(names, processedNumbers);
console.log(userProfiles);
