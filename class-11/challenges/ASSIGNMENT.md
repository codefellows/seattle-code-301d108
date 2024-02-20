# Code Challenge: Includes, Every, Substring, charAt

## Overview

Read [this overview.](README.md){:target="_blank"}

## Video

Watch the video for this class from the [demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k){:target="_blank"}

## Demonstration

Look through [these sample problems.](DEMO.md){:target="_blank"}

## Challenges

1. Navigate to the `javascript` folder within your `data-structures-and-algorithms` repository.
1. Create a new branch for this challenge called `strings`
   - `git checkout -b strings`
1. Retrieve the code challenge from the system
   - `npm run get-challenge 11`
1. In your terminal, from the `javascript` folder, run `npm test 11` to execute the tests in this file for **this challenge.**
   - At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
   - If you do not see this, verify your installation of Jest by typing `npx jest --version` in your terminal. Filename typos can make things break!
1. You'll see a series of challenges in the `challenges-11.test.js` file each of which has an associated test at the bottom of the file.
   - *HINT #1: Refer to the tests to see how the code you'll need to write will be used.*
   - *HINT #2: Changing `describe` to `xdescribe` on any test will cause the test runner to skip that test. This may help you to keep focused on one test at a time.
1. Beginning with Challenge 1, write code necessary to make the test pass. Let the error messages guide you.
1. Once the test is passing:
   - Refactor as needed.
   - Perform a `git add` and a `git commit` to mark your work on that challenge.
   - ... Then, move on to the next challenge and repeat.

> *Note, you can also run `npm test` (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get "noisy", but it's an opportunity to get a view of your overall progress*

## Submission

When you have completed your code challenges (tests are passing) and/or are at the alotted time:

- Perform a `git push` of your code to your repository.
- Create a pull request from your current branch to the main branch.
- Submit a link to the PR for grading and look for inline comments from your grader.
- Once grading is completed, merge this PR to your main branch.
- Remember to continually `git pull` as you merge your code challenges so you stay in sync.

You will be able to see a test coverage report in **GitHub** on the **Actions** tab of your `data-structures-and-algorithms` repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.
