import inquirer from "inquirer";
const rnno = Math.floor(Math.random() * 10);
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "guess",
        message: "what you guess?"
    }
]);
const { guess } = ans;
if (guess === rnno) {
    console.log(guess, "guess", rnno, "rnno");
    console.log("Answer is correct \n YOU WIN");
}
else {
    console.log("TRY AGAIN");
}
console.log(rnno);
