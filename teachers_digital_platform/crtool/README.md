# CR-Tool built using React - embeded in a django form

**Description**:  
- The Customer Review Tool is a web application that allows a teacher to asses the finacial merits of thier curriculum.  The assesment is made accross 4 dimensions "Content", "Quality", "Utility", & "Efficacy".  Once they are done responding to the questions in those dimensions they can print or save as PDF.

# Development Notes
- **Application Break Down**:
  - There are two web forms to this application:
    - ../jinja2/teachers_digital_platform/crt-start.html
        - This page is a standard Django template that uses JavaScript to store values in localStorage before redirecting you to the other page.
    - ../jinja2/teachers_digital_platform/crt-survey.html
        - This page is an empty template that initates the REACT application that handles the rest of the application.
    - Information is shared between the above two pages via localStorage.
- **Decisions Made**
    - `To use REACT`: There is a requirement to not refresh the page or past back.
    - `To NOT use REDUX`: The application does not need to send any information to the server since we are using localStorage.  REDUX appeared to over complicate this application because it is so simple
    - `To use localStorage`: We were under a data gathering freeze and needed to find a way to let the user work on this assesment over time with out sending any data to the server.  localStorage was the best solution. (NOTE: all localStorage has been implemented in the repository.js file in an effort to make changing this in the future easier)

  - **Technology stack**: Implemented using REACT with webpack.
    - Used the `create react app` when creating the initial app
      - https://github.com/facebook/create-react-app/blob/master/README.md#getting-started
    - This is important because it will now have a webpack.config.js.  Instead we have a package.json and the node_modules folder has defaults set up for us.

## Installing the REACT CRTool
- Once you have cloned the ```https://github.com/cfpb/teachers-digital-platform.git``` 
```console
root:~$ ./setup.sh
``` 
- The manual way to do it
```console
root:~$ cd teachers-digital-platform/crtool
root:~$ npm install
root:~$ npm run build
``` 
- The build will generate a new crtool.main.js file that is copied to the static/tdp/js folder

## Running Unit Tests for REACT CRTool
```console
root:~$ npm tests
``` 

## Viewing the code in the Main site:
- After you turn the feature flag on navigate here:
 - Actual URL: http://localhost:8000/practitioner-resources/youth-financial-education/curriculum-review/before-you-begin/
 - [Begin your review](http://localhost:8000/practitioner-resources/youth-financial-education/curriculum-review/before-you-begin/)
 - [Survey tool page](http://localhost:8000/practitioner-resources/youth-financial-education/curriculum-review/tool/)


# Development Code Break Down 
- Unit Test can be found under the ../src/__tests__ folder
  - They are using jest and enzyme
- `../src/js/CustomerReviewToolComponent.js`: Is the main entry point for the Survey tool
  - This is where you will find the state properites for the entire app.
  - This is where the flow of the application starts
  - From here the tool is broke down to the following sub sections:
    - Dimension Survey pages
      - These pages/components are where all the questions are presented to the user
    - Dimension Summary pages
      - These pages/components are where all results of the survey's are presented to the user with note fields
    - Final Print/Summary pages
      - These pages are where every thing in the tool is presented in a NON editable fasion for printing or saving as PDF from the print menu.

# Editing Content #
- Master content can be found here:
  - ../src/js/content_data/
  - NOTE: unfortunately time got away from us and the ...CriterionPage.js files did not pull the content from the master location since they were developed before the master content_data folder existed. We look forward to refactoring this out so every thing pulls from content_data.

## Break down ##
- Dimension Survey pages has content in TWO different locations:
  - ../src/js/components/pages/**/*CriterionPage.js
    - Here are the 6 differnet entry points:
      - ContentElementaryCriterionPage.js
      - ContentMiddleCriterionPage.js
      - ContentHighCriterionPage.js
      - QualityCriterionPage.js
      - UtilityCriterionPage.js
      - EfficacyCriterionPage.js
  - ../src/js/content_data
    - This is where all pages should pull their content from.  Pending a refactor of the CriterionPages.