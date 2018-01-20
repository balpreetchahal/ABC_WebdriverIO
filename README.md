Project Details<br />
The test suite using Page Object Model is created using javascript language, WebdriverIO library and Jasmine framework.<br />
The test cases pertain to various ABC news website pages.<br />
<br />
Folder structure<br />
<br />
~\ABCTest contains all the E2E test cases. <br />
~\ABCTest\test\specs folder has all the spec files for testing.<br /> 
~\ABCTest\pageObject folder has all the webelements and methods specific to the pages defined.<br />
<br />
Set up<br />
<br />
*download & install java <br />
*download & install node.js -- this will install npm <br />
*cd in to the javascript project(ABCTest) directory <br />
*run npm install webdriverio <br />
*run npm install selenium-standalone@latest <br />
*run selenium-standalone install <br />
*run selenium-standalone start -- keep this started <br />
*run npm install -g jasmine <br />
*create config file in the ABCTest directory <br />
<br />
Running tests<br />
<br />
*cd in to the ABCWdio.conf.js file location *run ".\node_modules\.bin\wdio" ABCWdio.conf.js<br />
