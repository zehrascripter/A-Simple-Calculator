#! /usr/bin/env node
import inquirer from "inquirer";
const myCalc = await inquirer.prompt([
    {
        type: 'list',
        name: 'opperation',
        message: 'What opperation you want to perform?',
        choices: ['addition', 'subtraction', 'multiply', 'divide'],
    },
    {
        type: 'number',
        name: 'num1',
        message: 'Enter your first number here'
    },
    {
        type: 'number',
        name: 'num2',
        message: 'Enter your second number here'
    }
]);
if (myCalc.opperation === 'addition') {
    console.log(myCalc.num1 + myCalc.num2);
}
else if (myCalc.opperation === 'subtraction') {
    console.log(myCalc.num1 - myCalc.num2);
}
else if (myCalc.opperation === 'multiply') {
    console.log(myCalc.num1 * myCalc.num2);
}
else if (myCalc.opperation === 'divide') {
    console.log(myCalc.num1 / myCalc.num2);
}
else {
    console.log("Input error");
}
