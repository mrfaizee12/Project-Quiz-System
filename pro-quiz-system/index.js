#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
// Define questions for the quiz
const questions = [
    {
        type: 'list',
        name: 'q1',
        message: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Berlin', 'Rome'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'q2',
        message: 'Which planet is known as the Red Planet?',
        choices: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'q3',
        message: 'What is the chemical symbol for water?',
        choices: ['H2O', 'CO2', 'NaCl', 'O2'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'list',
        name: 'q4',
        message: 'What is the largest ocean in the world?',
        choices: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
        filter: function (val) {
            return val.toLowerCase();
        }
    }
];
// Function to calculate the result of the quiz
function calculateResult(answers) {
    let score = 0;
    if (answers.q1 === 'paris') {
        score++;
    }
    if (answers.q2 === 'mars') {
        score++;
    }
    if (answers.q3 === 'h2o') {
        score++;
    }
    if (answers.q4 === 'pacific') {
        score++;
    }
    return score;
}
// Function to print congratulations or sorry message based on the score
function printMessage(score) {
    if (score === 4 || score === 3) {
        console.log(chalk.bold.greenBright("Congratulations!"));
    }
    else {
        console.log(chalk.bold.red("Sorry, you failed. Try next time."));
    }
}
// Function to start the quiz
function startQuiz() {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
        }
    ])
        .then((answers) => {
        inquirer.prompt(questions).then((quizAnswers) => {
            const result = calculateResult(quizAnswers);
            console.log(chalk.bold.greenBright(`\nHello, ${answers.name}! Your score: ${result}/${questions.length}`));
            printMessage(result);
        });
    });
}
// Call the function to start the quiz
startQuiz();
