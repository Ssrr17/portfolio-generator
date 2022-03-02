const inquirer = require('inquirer');
// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Enter your Github username'
    },
    {
      type: 'input',
      name: 'About',
      message: 'Provide so information about yourself'
    }

  ])
}
const promptProject = portfolioData => {
 
  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  console.log(
    `==================
    Add a new project
    ==================`
  );
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Project Name',
      message: 'Enter your project name'
    },
    {
      type: 'input',
      name: 'descriptions',
      message: 'Enter a description of your project (Required)'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build your propject with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Boottrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project (Required)'
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
}
//calls promptUser - then gets promise - then what to do with the promise that was returned

promptUser()
  .then(promptProject)
  .then(portfolioData => {
   console.log(portfolioData);
  });