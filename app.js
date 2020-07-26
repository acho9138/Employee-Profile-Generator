const { managerQuestions, engineerQuestions, internQuestions } = require("./lib/Questions")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { throws } = require("assert");

// Introduction to the app
console.log("Let's build the team!");

let questions = managerQuestions;
let employeeList = []
let newEmployeeType = "Manager"

// Check user input to add new employee
const checkNewMember = () => {
    // Set questions specific to employee type
    if (newEmployeeType === "Engineer") questions = engineerQuestions;
    else if (newEmployeeType === "Intern") questions = internQuestions;
    else {
        // Stop askQuestion function by emptying questions array
        questions = []
        // Create file in output folder with rendered html of user inputted employee info
        fs.writeFile(outputPath, render(employeeList), err => {
            if (err) throw err;
            console.log("Successfully created your team profile!");
        });
    }
}

// Create object containing user selected employee type and its corresponding info
const createEmployee = (info) => {
    let employee = {}
    if (newEmployeeType === "Manager") employee = new Manager(info.managerName, info.managerId, info.managerEmail, info.managerOffice)
    else if (newEmployeeType === "Engineer") employee = new Engineer(info.engineerName, info.engineerId, info.engineerEmail, info.engineerGitHub)
    else employee = new Intern(info.internName, info.internId, info.internEmail, info.internSchool)
    employeeList.push(employee)
}

// Recursive function to ask users for input
const askQuestion = () => {
    inquirer
        .prompt(questions)
        .then((response) => {
            // Create employee
            createEmployee(response)

            // Gets the employee type and sets the next set of questions to ask
            newEmployeeType = response.newMember;
            checkNewMember()

            // Exits recursive call when user doesn't add more employees
            if (questions.length > 0) {
                askQuestion()
            }
        });
}

// Initiate prompts for employee info
askQuestion()