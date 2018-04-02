# CR-Tool built using React - embeded in a django form

**Description**:  Description of CR-Tool coming soon

  - **Technology stack**: Implemented using REACT with webpack.

## Installing the REACT CRTool
- Once you have cloned the ```https://github.com/cfpb/teachers-digital-platform.git``` 
```console
root:~$ ./setup.sh init
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
root:~$ npm run tests
``` 

## Viewing the code in the Main site:
- After you turn the feature flag on navigate here:
 - [http://localhost:8000/tdp/prototypes/crt-survey-react/] - http://localhost:8000/tdp/prototypes/crt-survey-react/