let maximum = parseInt(prompt("Enter a maximum number!"));

if (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
