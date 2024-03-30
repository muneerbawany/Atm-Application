import inquirer from "inquirer";
let Yourcurrentbalance = 10000; //dollor
let mypin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct pin Code :-)");
    let OperationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Cash Withdrawl", "Check Balance"],
        },
    ]);
    if (OperationAnswer.operation === "Cash Withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        Yourcurrentbalance -= amountAns.amount;
        console.log("Your remaining balance is" + Yourcurrentbalance);
    }
    else if (OperationAnswer.operation === "Check Balance") {
        console.log("your balance is " + Yourcurrentbalance);
    }
}
else {
    console.log("InCorrect pin Code :-(");
}
