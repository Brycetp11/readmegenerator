Link to github repo: https://github.com/Brycetp11/readmegenerator

Video demonstration:
![](utils\index.js - readmegenerator - Visual Studio Code 2020-07-06 19-07-00.mp4)

In this project, I have created a readme.md file generator which will auto fill the user's desired: 
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions (email, and github username)

  To do this I created 2 seperate js files within the util folder, the first with the inquirer prompts, and the second with the format of the readme.md.

  In the inquirer prompt js doc, I used mostly input types to generate the user's answers, then exported the array into the index.js file.

  The generateMarkdown file contains the template for a readme file with the selector to use the individual's response data to fill into the correct spaces. This document was also exported to the index.js file.

  In the index.js file, I required the needed node libraries, and wrote a few functions. First I used promisify to define an asynchronous function to write the md file. Then I wrote a function which would fire the inquirer prompts. Finally I created the readme file using the user's responses to the prompt and the asynchronous function defined previously.