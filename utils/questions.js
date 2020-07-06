const questions = [
    {
        type:"input",
        name: "title",
        message: "What would you like to title your project?",
    },
    {
        type: "input",
        name:"description",
        message: "Brief description of your project:",
    },
    {
        type: "input",
        name: "install",
        message: "Explain instructions for installation (i.e. dependencies)"
    },
    {
        type: "input",
        name: "uses",
        message: "Explain the use case for this project."
    },
    {
        type: "list",
        name: "license",
        choices: ['MIT', 'GPLv2', 'GPLv3', 'BSD3', 'Apache'],
        default: "MIT"
    },
    {
        type: "input",
        name: "contribute",
        message: "Explain how someone can add to the project.",
    },
    {
        type: "input",
        name: "test",
        message:"What is the test information?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }

];

module.exports = {
    questions
}