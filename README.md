# Exercise template javascript

## **Requirements**
[Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

### **Dependencies**
The unit testing framework [mochajs](https://mochajs.org/) must be installed locally.

After that we can use any assertion library we want like:

[expect.js](https://github.com/Automattic/expect.js) 
`npm install expect.js --save`

[should.js](https://shouldjs.github.io/) 
 `npm install should --save`

[sinon.js](http://sinonjs.org/)
`npm install sinon --save`

...

### **Folders and files**
The repository must contain:

 - sources folder 
 - test folder 
 - .gitignore
 - meta.json 
 - package.json
 - README.md

#### **Sources**
The sources folder contain our exercise in one or multiple files. We name those files **editables**
The exercise must export **her function** and **return a value** to run the tests:

example:

    module.exports = function addition(a , b){
        if( isNaN(a) || isNaN(b))
            return 'isNaN';
    
        return parseInt(a, 10) + parseInt(b, 10);
    };

#### **Test**
  The test folder contain the test files according to the sources file:

example:

    var expect = require('expect.js');
    var addition = require('../sources/addition.js');
    
    suite('Add two numbers', function(){
    
        test('Must return "isNaN" if one of the arguments are not a number', function(){
            var a = 'p';
            var b = 32;
            var result = addition(a, b);
            expect(result).to.be('isNaN');
        });
    
        test('Must return a number', function(){
            var a = '2';
            var b = 5;
            var result = addition(a, b);
            expect(result).to.be.a('number');
        });
    
        test('Must return a right result', function(){
            var a = '23';
            var b = 54;
            var result = addition(a, b);
            expect(result).to.be.equal(77);
        });
    
    });
    
In this folder we have mocha.opts file, we can configure which type of test we want.
For more information: [mocha options file](https://mochajs.org/#mochaopts)

#### **.gitignore**
By default we ignore the node_modules folder.

    /node_modules

#### **meta.json**
The meta.json file tell us where the editables files are for the deployment.

    {
        "editables": [
            "./sources/addition.js"
        ]
    }

#### **package.json**

    {
      "name": "exercise-sample",
      "version": "1.0.0",
      "description": "Coderpower exercise template",
      "directories": {
        "test": "./test"
      },
      "scripts": {
        "test": "mocha"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/Coderpower/exercise-template.git"
      },
      "author": "Coderpower Sample",
      "homepage": "https://github.com/Coderpower/exercise-template.git#readme",
      "dependencies": {
        "expect.js": "^0.3.1"
      }
    }

#### **README.md**
We have to write the directions in the README.md.

example:

    # Addition
	You receive two numbers and you have to add the numbers.
	If one of the two numbers is a string you have to return "isNaN".

	Have fun!





