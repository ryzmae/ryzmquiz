#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playername;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a Programmer millionaire? \n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
        ${chalk.bgBlue("How To Play")}
        I am a process on you're computer.
        If you get any questions wrong, i will be ${chalk.bgRed("killed")}!
        So get them right...
    `)

}

async function askName() {
    const answers = await inquirer.prompt({
        name: "player_name",
        type: "input",
        message: "What is your name?",
        default() {
            return "Player";
        },
    });
    playername = answers.player_name;
}

async function question_1() {
    const answers = await inquirer.prompt({
        name: "question_1",
        type: "list",
        message: "When was Javascript released?",
        choices: [
            "May 23rd, 1995",
            "Nov 24th, 1995",
            "Dec 4th, 1995",
            "Dev 17th, 1996"
        ],
    });

    return handleAnswer(answers.question_1 === 'Dec 4th, 1995');
}

async function question_2() {
    const answers = await inquirer.prompt({
        name: "question_2",
        type: "list",
        message: "When was Node.js released?",
        choices: [
            "May 24th, 2009",
            "Dec 4th, 2009",
            "May 27th, 2009",
            "Dec 17th, 2009"
        ],
    });

    return handleAnswer(answers.question_2 === 'May 27th, 2009');
}

async function question_3() {
    const answers = await inquirer.prompt({
        name: "question_3",
        type: "list",
        message: "When was Python released?",
        choices: [
            "Feb 20th, 1991",
            "Dec 4th, 1991",
            "May 27th, 1991",
            "Dec 17th, 1991"
        ],
    });

    return handleAnswer(answers.question_3 === 'Feb 20th, 1991');
}

async function question_4() {
    const answers = await inquirer.prompt({
        name: "question_4",
        type: "list",
        message: "When was Git released?",
        choices: [
            "Feb 20th, 2005",
            "Dec 4th, 2005",
            "May 27th, 2006",
            "Apr 7th, 2005"
        ],
    });

    return handleAnswer(answers.question_4 === 'Apr 7th, 2005');
}

async function question_5() {
    const answers = await inquirer.prompt({
        name: "question_5",
        type: "list",
        message: "When was Django released?",
        choices: [
            "May 1st, 2006",
            "July 21st, 2005",
            "Dec 4th, 2005",
            "Apr 7th, 2005"
        ],
    });

    return handleAnswer(answers.question_5 === 'July 21st, 2005');
}

async function question_6() {
    const answers = await inquirer.prompt({
        name: "question_6",
        type: "list",
        message: "When was React.js released?",
        choices: [
            "Dec 24th, 2014",
            "May 29th, 2013",
            "May 27th, 2013",
            "Apr 7th, 2015"
        ],
    });

    return handleAnswer(answers.question_6 === 'May 29th, 2013');
}

async function question_7() {
    const answers = await inquirer.prompt({
        name: "question_7",
        type: "list",
        message: "When was Java released?",
        choices: [
            "Dec 12th, 1995",
            "May 23th, 1995",
            "July 21st, 1995",
            "Apr 7th, 1997"
        ],
    });

    return handleAnswer(answers.question_7 === 'May 23th, 1995');
}

async function question_8() {
    const answers = await inquirer.prompt({
        name: "question_8",
        type: "list",
        message: "When was Swift released?",
        choices: [
            "June 2nd, 2014",
            "May 23th, 2014",
            "July 21st, 2016",
            "Apr 7th, 2015"
        ],
    });

    return handleAnswer(answers.question_8 === 'June 2nd, 2014');
}

async function question_9() {
    const answers = await inquirer.prompt({
        name: "question_9",
        type: "list",
        message: "When was PHP released?",
        choices: [
            "July 8th, 1995",
            "May 23th, 1995",
            "July 21st, 1995",
            "June 8th, 1995"
        ],
    });

    return handleAnswer(answers.question_9 === 'June 8th, 1995');
}

async function question_10() {
    const answers = await inquirer.prompt({
        name: "question_10",
        type: "list",
        message: "When was Visual Studio Code released?",
        choices: [
            "July 8th, 2015",
            "May 23th, 2015",
            "July 21st, 2017",
            "Apr 29th, 2015"
        ],
    });

    return handleAnswer(answers.question_10 === 'Apr 29th, 2015');
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking answer...").start();
    await sleep()

    if (isCorrect) {
        spinner.success({ text: `Nice work ${playername}!`});
    }
    else {
        spinner.error({ text: `Game over, you lose ${playername}!`});
        process.exit(1);
    }
}

function winner() {
    console.clear();

    const msg = `Congratulations ${playername}! You won!\n $ 1 , 0 0 0 , 0 0 0`;

    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

await welcome();
await askName();
await question_1();
await question_2();
await question_3();
await question_4();
await question_5();
await question_6();
await question_7();
await question_8();
await question_9();
await question_10();
winner();