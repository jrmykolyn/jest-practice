# Jest Practice

## Introduction
This repository contains the starter files for the 'Jest Practice' exercise.

In this exercise we'll introduce Jest-based tests for a pre-existing cookbook program. This program consists of the core logic (`cookbook.js`), a CLI that 'sits' between the core logic and the user (`cookbook-cli.js`), and a small script that connects the two (`index.js`). We will write a series of tests to ensure that the core logic and the CLI work as expected.

This exercise will build on the concepts and techniques that we've explored in this course, as well as some of the material that you have covered in the other WDDM courses.

## Learning Objectives
- To learn more about JavaScript and Node, including packages and module resolution.
- To continue building familiarity with testing in general and the Jest testing framework in particular.

## Prerequisites
To complete today's exercise you should have an understanding of the following:
- JavaScript fundamentals, including variables, functions, conditional statements, errors, and events.

You must also have Node installed on your local system. See the resources section below for download information.

## Goals
At a minimum, your submission should include the following:
- Passing implementations of the tests defined within the `test/cookbook.test.js` file.
- Passing implementations of the tests defined within the `test/cookbook-cli.test.js` file.
- Integration tests for the `CookbookCli` to ensure that it is correctly interacting with the underlying `Cookbook`. These tests have not been defined _or_ implemented. This means that you must figure out what the tests cases should be _and_ how to implement them.

## Stretch Goals
If you are interested in going above-and-beyond the minimum requirements of the assignment, try implementing one or more of the stretch goals outlined below:

1. Update the `CookbookCli` to return a special message when the cookbook does not include any recipes. This update should be accompanied by a test. The message should be clear and descriptive, but the content is up to you.
2. Update the `CookbookCli` to display a warning message when the user attempts to add a recipe that already exists. This update should should be accompanied by a test. The message should be clear and descriptive, but the content is up to you.
2. Update the `CookbookCli` to display a warning message when the user attempts to retrieve a recipe that does not exist. This update should should be accompanied by a test. The message should be clear and descriptive, but the content is up to you.
2. Update the `CookbookCli` to display a warning message when the user attempts to delete a recipe that does not exist. This update should should be accompanied by a test. The message should be clear and descriptive, but the content is up to you.

## Before You Begin
- Fork this repository to your personal GitHub account.

## Approach
This exercise focuses primarily on testing, but each of the stretch goals requires an update to the implementation code as well.

As usual, you are free to approach this exercise however you see fit. If you would like some additional help, feel free to use the following approach:

- Start by familiarizing yourself with the `index.js`, `cookbook-cli.js`, and `cookbook.js` files. The logic of the program is distributed across all three files, so understanding what they do and the relationships that exist between them is essential.
- Manually test/explore the CLI by interacting with the `index.js` file.
- Review the test cases defined in the `cookbook-cli.test.js` and `cookbook.test.js` files. Are the test cases clear? Do you understand their intentions?
- When you're ready to begin, install the project's dependencies (including Jest) by running the following command from the root of the repository: `npm install`.
- Confirm that you can successfully execute the tests by running the following command: `npm run test`. Although you haven't actually written any tests yet, you should see a success message in your terminal application.
- Pick one of the test files and implement each of the tests cases within. Make sure to _run_ the tests each time you implement a new test case. Getting frequent feedback helps to identify errors early.
- Commit frequently (for example: each time you successfully implement a new test case). Having a Git history made up of many small commits makes it easy to step backwards in cases where something goes wrong.

## Resources

### Node
- Download: https://nodejs.org/en/
- Modules, imports, and exports: https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports

### Testing
- Jest: https://jestjs.io/
- Using the `describe()` function: https://jestjs.io/docs/en/api#describename-fn
- Using the `test()` function: https://jestjs.io/docs/en/api#testname-fn-timeout
