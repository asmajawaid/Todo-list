import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            message: "What would you like to add in you todos?",
            type: "input",
        },
        {
            name: "secondQuestion",
            message: "What would you like to add more in your todos?",
            type: "confirm",
            default: "true",
        },
    ]);
    todos.push(todoQuestion.firstQuestion);
    console.log(todos);
    condition = todoQuestion.secondQuestion;
}
