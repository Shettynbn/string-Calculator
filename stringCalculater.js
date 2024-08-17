exports.add = (numbersString) =>{
    if (numbersString === "") return 0;

    let delimiter = /,|\n/;
    let numbers = numbersString;

    if (numbersString.startsWith("//")) {
        const delimiterSection = numbersString.split("\n")[0];
        delimiter = new RegExp(delimiterSection.slice(2));
        numbers = numbersString.split("\n")[1];
    }

    const numberArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numberArray.reduce((sum, num) => sum + num, 0);
}
