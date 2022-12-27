/**
$1. Description
    Digital personal assistants help people to drive cars, plan their day, buy
    something online. In a sense, they are simplified versions of artificial
    intelligence with whom you can talk.
    In this project, you will develop step by step a simple bot that will help you
    study programming.

$2. Objective
    For the first stage, you will write a bot who displays a greeting, its name,
    and the date of its creation. First impressions count!
    Your program should print the following lines:
        Hello! My name is {bot_name}.
        I was created in {birth_year}.
    Instead of {bot_name}, print any name you choose and replace {birth_year}
    with the current year (four digits).

$3. Example
        Hello! My name is Aid.
        I was created in 2022.
    You can change the text if you want but print exactly two lines.
    Next, we will use Aid and 2022 as your bot's name and its birth year, but you
    can change it if you need to.
**/

let botName = "Kitty";
const greeting = "Hello! My name is " + botName;

let age = 2022;
const creation = "I was created in " + age;

console.log(greeting);
console.log(creation);

/**
$1. Description
    The greeting part is great, but chatbots are also supposed to interact with
    a user. It's time to implement this functionality.

$2. Objective
    In this stage, you will introduce yourself to the bot so that it can greet you
    by your name.
    Your program should print the following lines:

    Hello! My name is Aid.
    I was created in 2022.
    Please, remind me your name.
    What a great name you have, {your_name}!
    You may change the name and the creation year of your bot if you want.

    Instead of {your_name}, the bot must print your name entered from the standard
    input.

$3. Example
    The greater-than symbol followed by a space (> ) represents the user input.
    Note that it's not part of the input.
    Example 1: a dialogue with the bot

    Hello! My name is Aid.
    I was created in 2022.
    Please, remind me your name.
    > Max
    What a great name you have, Max!

    Use the provided template to simplify your work. You can change the text, but
    not the number of printed lines.
**/
    const input = require('sync-input');

    console.log("Hello! My name is Kitty.");
    console.log("I was created in 2022.");
    console.log("Please, remind me your name.");
    let name = input();
    // use input() + to get the user's output
    console.log("What a great name you have, " + name + "!");

/**
$1. Description
    Keep improving your bot by developing new skills for it. We suggest a simple
    guessing game that will predict the age of a user.
    It's based on a simple math trick. First, take a look at this formula:
        age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
    The numbers remainder3, remainder5, and remainder7 are the remainders of division
    by 3, 5 and 7 respectively.
    It turns out that for each number ranging from 0 to 104, the calculation will
    result in the number itself. This perfectly fits the ordinary age range,
    doesn't it? Ask the user for the remainders and use them to guess the age!

$2. Objective
    In this stage, you will introduce yourself to the bot. It will greet you by
    your name and then try to guess your age using arithmetic operations.
    Your program should print the following lines:
        Hello! My name is Aid.
        I was created in 2022.
        Please, remind me your name.
        What a great name you have, Max!
        Let me guess your age.
        Enter remainders of dividing your age by 3, 5 and 7.
        Your age is {your_age}; that's a good time to start programming!
    Read three numbers from the standard input. Assume that all the numbers will
    be given on separate lines.
    Instead of {your_age}, the bot will print the age determined according to the
    special formula discussed above.

$3. Example
    The greater-than symbol followed by a space (> ) represents the user input.
    Note that it's not part of the input.
    Example 1: a dialogue with the bot
        Hello! My name is Aid.
        I was created in 2022.
        Please, remind me your name.
        > Max
        What a great name you have, Max!
        Let me guess your age.
        Enter remainders of dividing your age by 3, 5 and 7.
        > 1
        > 2
        > 1
        Your age is 22; that's a good time to start programming!
**/
    const input = require('sync-input');

    console.log("Hello! My name is Kitty.");
    console.log("I was created in 2022.");
    console.log("Please, remind me your name.");

    let name = input();
    console.log("What a great name you have, " + name + "!");
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let remainder3 = input();
    let remainder5 = input();
    let remainder7 = input();
    let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;
    console.log("Your age is " + age + " that's a good time to start programming!");

/**
$1. Description
    Now you will teach your bot to count. It's going to become an expert in numbers!

$2. Objective
    In this tage, you will program the bot to count from O to any positive number
    users enter.

$3. Example
    The greater-than symbol followed by a space (> ) represents the user input. Note
    that it's not part of the input.
    Example 1: a dialogue with the new version of the bot
        Hello! My name is Aid.
        I was created in 2022.
        Please, remind me your name.
        > Max
        What a great name you have, Max!
        Let me guess your age.
        Enter remainders of dividing your age by 3, 5 and 7.
        > 1
        > 2
        > 1
        Your age is 22; that's a good time to start programming!
        Now I will prove to you that I can count to any number you want.
        > 5
        0 !
        1 !
        2 !
        3 !
        4 !
        5 !
        Completed, have a nice day!
    Note: each number starts with a new line, and after a number, the bot should
    print the exclamation mark.
    Use the provided template to simplify your work. You can change the text if you
    want, but be especially careful when counting numbers.
**/
    const input = require('sync-input');

    console.log("Hello! My name is Aid.")
    console.log("I was created in 2020.")
    console.log("Please, remind me your name.")

    let name = input()

    console.log("What a great name you have, " + name + "!")
    console.log("Let me guess your age.")
    console.log("Enter remainders of dividing your age by 3, 5 and 7.")

    let rem3 = Number(input());
    let rem5 = Number(input());
    let rem7 = Number(input());

    let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

    console.log("Your age is " + age + "; that's a good time to start programming!");
    console.log("Now I will prove to you that I can count to any number you want.");

    let userCount = Number(input());
    let count = 0;
    while (count <= userCount) {
        console.log(count + " !");
        count++;
    };

    console.log("Completed, have a nice day!");
