import inquirer from "inquirer";
const currency:any ={
    USD: 1,
    EUR: 0.89,
    INR: 75,
    PKR: 300
};
let userAns = await inquirer.prompt(
        [
            {
          name: "from",
          message: "Enter from Currency",
          type: "list",
          choices: ["USD","EUR","INR","PKR"]
            },
            {
                name: "to",
                message: "Enter to Currency",
                type: "list",
                choices: ["USD","EUR","INR","PKR"]
                  },
                  {
                    name: "amount",
                    message: "Enter your Amount",
                    type: "number",
                    
                      },
        ]
);
let fromamount = currency[userAns.from]
let toamount = currency[userAns.to]
let amount = userAns.amount;
let baseAmount = amount / fromamount;
let convertedAmount = baseAmount * toamount;
console.log(amount);
console.log(`Currency you want to convert from ${fromamount}`);
console.log(`Currency you want to convert to ${toamount}`);
console.log(`Your Converted Currency ${convertedAmount}`);
