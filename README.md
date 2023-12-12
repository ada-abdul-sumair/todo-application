# Todo-Application

- Todo application for SQA assignment 2

## <ins>Project Description</ins> SUMAIR

- desc of project
Todo list application
Purposes: daily chores, shopping list

- features
Add items
Delete items
Edit items
Delete all items

- snapshots of ui
Figma design
Page before todos
Page w todos added
Checked todo
Editing Modal


`Todo app homepage`
![Todo homepage](./img/Todo%20homepage.png)

`Added Todo`
![Added Todo](./img/Added%20Todo.png)

`Edit Todo popup`
![Edited Todo](./img/Edited%20Todo.png)

## <ins>Team Description</ins> SUMAIR
Our team consisted of only two members. Due to this, each member undertook multiple roles in the team. Despite having individual roles, we wore multiple hats and discussed features collaboratively in our daily standups. 

**Abdul-Subhan Latif** - Abdul-Subhan was the lead QA tester on the team. His role in the project entailed writing tests for the application and ensuring SQA practices were implemented throughout the project lifecycle. Alongside this, Abdul-Subhan was heavily involved in the planning stage, designing the initial Figma for the Front-End and outlining the functional and non-functional requirements for the project.

Abdul-Subhan Key Roles:
- Writing tests
- Implementing linting checks
- Implementing code formatter
- SQA practices
- Reviewing pull requests
- Smoke testing pull requests
- Lead designer
- Contributing to documentation
  
**Sumair Ruhani** - Sumair was the lead developer on the team. He designed and implemented the core functionality for the To-Do app, alongisde styling it based on the Figma designs. Alongside this, Sumair was responsible for ensuring CI/CD practices were implemented in the project, by writing GitHub actions and Git Hooks. 

Sumair Key Roles:
- Writing the program
- Git Hook for enforcing conventions
- Implementing automated testing
- CI/CD practices
- Reviewing pull requests
- Smoke testing pull requests
- Project Manager
- Contributing to documentation
  
Both members of the team evenly split the workload between themselves, with one primarily focused on developing the app and implementing CI/CD practices, while the other was focused on writing tests and ensuring SQA practices where met. Therefore, the contribution from each member was 50% each.

_Note: The line contributions is **NOT** an accurate reference for the contributions from each member, due to an error where the `node_modules` (prewritten packages) were committed alongside the rest of the code, causing the lines committed to be more than it should be for one member._
_For a more accurate representation of code contribution, please go through each pull request, to view contributions from each member. This can be done using the search filter on the pull requests tab of the repository and setting the filter to: `is:pr is:merged`_

## <ins>Tools Used</ins> SUMAIR

- version control - GitHub
Version & source control
Reviewing
Pipeline tests

- testing - Jest / React Testing Library
Unit testing (of components, main page)
Integration tests (functionality)

- test code coverage
Code Cov (TO DO)

- frameworks and libraries - React / MUI
React - for FE
Material UI (MUI) - premade components

### _Linters_

_ESLint_

This project utilisies ESLint for analysing JavaScript code for potential errors, styling issues, and adherence to coding standards.
ESLint rules have been defined by the team in the .eslintrc.js file, in rukles for errors, warnings and styling have been customised.
ESLint has been integrated in the `package.json` file to run after each commit and after each push.
To manually run the linter on the code, run the command:

```
npx eslint .
```

Prettier - code formatting

- project management tools
Figma - designs
Jira - kanban board
Git - version controlling

- performance and accessibility audit
Google Lighthouse (TO DO)

## <ins>Instructions to Run and Use the Application</ins>

### How to clone the repository

Navigate to the application's public GitHub repository via this link: 
[`https://github.com/sumairruhani2/todo-application`](https://github.com/sumairruhani2/todo-application)

Clone the repo locally by running `git clone ` followed by the HTTPS or SSH link 

### How to start the application

Open the codebase and run `npm i` from root level

Run `npm run start` and wait until a browser opens with the application

### Features of the application

With this app, users can:
- Add text in the textbox and submit with the `Add New Todo` button
- Edit text of existing Todos with the edit button on the Todo
- Mark Todos as done which adds a strikethrough to the text
- Delete individial Todos with the delete button on the Todo
- Delete all Todos with the `Delete All Todos` button

## <ins>Project Workflow</ins>

### Project management strategy

This project adopted an agile strategy utilising the Scrum-Kanban hybrid frameworks. 
The team decided this hybrid approach was the most suitable for this project for the following reasons:
- Flexibility - Scrum provides structure with fixed-length sprints while accommodating changes in priorities and incorporating a continuous flow of work with Kanban
- Continuous Delivery - A balance between regular delivery milestones with sprints in Scrum and a continuos delivery model with Kanban allows results to be yielded faster
- Enhanced Visual Management - Kanban utilises collaborative visual boards to represent work flow
- Enhanced Collaboration - Scrum promotes regular check-ins with regular ceremonies and communication and Kanban encourages continuous collaboration.

### Retrospectives

As part of the Scrum framework, daily retrospectives were held at the earliest time in the mornings to provide updates regarding features, bugs, blockers or any other project detail. 
Retrospectives sometimes took place Google Chat instead of a call via Google Meet; this made technical comments and questions easier to process and respond to appropriately. 
Having only 2 members in the team allowed for greater flexibility in communication methods and timings

### Kanban board

A kanban board was created using Jira Software. 
2 types of tickets were used: features, for any new changes, and bugfixes, for fixing broken features
The board contained the following columns:
- `To Do` - all the created tickets were stored under this heading until picked up
- `In Progress` - tickets were assigned and picked up in this column
- `Review` - once a PR was created, the corresponding ticket was moved to this column
- `Done` - once a PR was merged, tickets were marked as completed in this column

The board can be viewed via this link:
[`https://jira.external-share.com/issue/102592/abdul-subhan_latif_@_board_share`](https://jira.external-share.com/issue/102592/abdul-subhan_latif_@_board_share)

## <ins>Test Methodologies and Tools</ins> ABDUL-SUBHAN

### Types of tests

The Todo app underwent multiple phases of testing to ensure reliability and functionality. 
Automated tests were created and integrated in the CI pipelines; all the tests ran on every PR and reran automatically every time something was pushed to it. 
Here are the forms of testing carried out and at what stage in development they occurred:

- Manual smoke testing - For each PR, the contributor carried out build verification testing by running the app and manually adding, editing, and removing Todo items, to ensure essential features and components of the app were still functional after changes were made. 
- Sanity testing - After a functional feature was added or fixed, this form of narrow regression testing was manually carried out by running the app and using the new feature/fix to ensure the minor changes or bug fixes worked as intended
- Unit testing - For each React component created, each one required automated testing in isolation to test the functionality, its methods, and how it behaves with different inputs. This was automated with the Jest library to simulate component rendering, user interactions, and check the component's internal state and behavior. 
- Integration testing (UI testing) - After building each React component, the interactions and collaboration between multiple components were tested to ensure that they work correctly together as a unit with the desired functionality. UI testing was automated with Jest, simulating user interactions such as clicking buttons, entering text into input fields, and reloading pages. 

Code cov

- evidence of test methods and tools (tables of tests, snapshots, code coverage)
Test tables
Test plans
Snapshots
Code cov
Pipeline tests ss

## <ins>Coding Best Practices</ins> ABDUL-SUBHAN

- best coding practices applied
Variable naming conventions
File & function naming
Repo structure

- Linter 
(eslint)
Git Hook added
Pre-commit
Pre-push

- Formatter 
(prettier)
Pre-commit
- (conventional commits)

- _Git Hooks_

Git hooks are scripts that Git automatically executes primarily on a local machine before or after events (like committing, pushing, pulling, etc).
These hooks tailor the Git workflow to project-specific needs by enforcing coding standards, running tests, and preventing commits that don't meet predefined criteria.
Default Git hooks are stored in `./.git/hooks`.
Created hooks are kept in `./git-hooks`
The hooks created for this project are:

### _Branch naming conventions_

Branches should be identified as feature|task|bugfix|hotfix, followed by the JIRA task id and a description, for example:

```
feature/TODO-999_enforce_branch_naming_conventions
```

To ensure that branch names adhere to the specified conventions, we have set up a Git hook. Follow the steps below to set up the hook in your local repository.

Make the script file executable:

```
chmod +x setup-hooks.sh
```

Run the script file to download and set up the git hook:

```
./setup-hooks.sh
```

## <ins>CI Pipeline</ins> SUMAIR

- how the CI pipelines were set up

- snapshots of test suite results
Pipeline screenshots

- PR strategies applied
Trunk-based development

(make note about cannot merge until reviewed)
(explain how actions work)

### _GitHub Actions_

GitHub Actions are workflows defined in code, stored alongside the code in a repository. GitHub Actions automate the SDLC, from building and testing to deploying. They are triggered by events, and executed in GitHub-hosted runners, allowing easy integration with GitHub repositories. Likewise, they sit directly in the GitHub Pipeline, dictating what can be merged into the codebase, based on their outcomes.
The GitHub Actions integrated in this repository are:

- **Automatic Reviewer assign** - Whenever a pull request is created, an appropriate reviewer is assigned. Since our project had two members, whenever one member created a pull request, the action automatically assigned the other member as a required reviewer. The reviewer recieves an email notification informing them that they need to review the pull request. This removes the need for the developer to manually add reviewers. Likewise, this prevents the situation where users forget to assign reviewers to their pull request, resulting in it sitting and becoming stale, which is bad practice.

- **Automatic author assign** - Whenever a pull request is created, the creator of it is automatically assigned as the author. This removes the step for developers to manually assign themselves as an author (which is often forgotten about) and ensures the reviewer knows who was responsible for the pull request. Although this feature isn't necessarily required with only 2 people working in the codebase, it is a good practice to implement regardless. 

- **Automated testing** - An Action has been written to automatically run all tests within the codebase in the pipeline, including all unit tests and integration tests. The action is triggered whenever a pull request is created, or updated. It runs using NodeJS in the GitHub pipeline and will log all of the tests that have successfully passed or failed during the testing process. If any tests fail, they are logged, and merging will be blocked until it is fixed. This ensures that only high quality code that passes the tests are merged.

## <ins>Standards</ins> ABDUL-SUBHAN

- description of a standard (like IEEE730)
- reason for choosing the standard
- key features of standard applied

## <ins>Performance and Accessibility Audit</ins> ABDUL-SUBHAN

- tools used to check performance and accessibility of application
- snapshots of key results
- analyse results

(UIUX stuff about colours matching, colour theory, simplistic design etc)
