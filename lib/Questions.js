const newMemberQuestion = {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "newMember",
    choices: ["Engineer", "Intern", "There are no more team members to add"]
}

const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice"
    },
    newMemberQuestion
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "engineerId"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "engineerGitHub"
    },
    newMemberQuestion
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool"
    },
    newMemberQuestion
]

module.exports = {
    internQuestions: internQuestions,
    engineerQuestions: engineerQuestions,
    managerQuestions: managerQuestions,
}