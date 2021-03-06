# Exercise template - javascript
This document provides a concise explanation of how content is created on Coderpower. It should also help developers understand the processes behind the scenes of the coderpower platform to evaluate code submissions.

## How it works
### Concepts
Exercises on Coderpower can be Discoveries, Practices or Challenges.
 
- **Discovery**: An exercise that show, by example, how a library, framework, SDK, API, or design pattern works. It provides an initial code that can be tweaked by developers.
- **Practice**: An exercise that allows developers to explore a subject helping them to understand the concept through practice. Developers can try to solve exercises as many times as they like.
- **Challenge**: An exercise where developers compete against each other to solve a problem. They are assessed on two criteria.
    - **Ranking**:
        - a base score: ( **X** ),
        - a bonus score: ( **Y** ),
        - a bonus time: ( **T** )
            - **1st** participant finding the solution wins **100%** of **X**
            - **2nd** participant wins **80%** of **X**
            - **3rd** wins **70%** of **X**
            - **4th** wins **60%** of **X**
            - **5th** and next win **50%** of **X**
    - **Time**: For those who find the solution in **less** than **T**, we’ll apply the **%** of **T** consumed, to **Y** and add it to their score.

    
### Imports
Exercises on Coderpower are not more than repositories. The creation process is just a clone of the repository on the server. Then we parse some key information like the written tests, README.md, and the meta.json (we will talk about this one in the next section).

## Requirements
### Testing framework
Behind the scenes, Coderpower validates participations by **running tests**. We have specific testing frameworks regarding the requirements for each language.

For the **javascript** language we use [mocha](https://mochajs.org/).

You can use any assertion/mocking library you like but don't forget to add it to your `package.json`.

> **Note:** at Coderpower we like to use : 

>- expect.js `npm install expect.js --save`
- should.js `npm install should --save`
- sinon.js `npm install sinon --save`


<h3 style="color: red">/!\ Important /!\ </h3>
For performance purposes all codes that take more than **3 seconds** to run will be **killed**. You need to take this into account when you design your test suites, especially for asynchronous code.

### Content
In order to import a repository into the Coderpower platform you need to provide some information.

- `README.md` : The readme will be parsed and taken as the subject of your exercise.
- `meta.json` : The file describes which sources will be editables by the developers. Here is an example :

```json
{
    "editables": [
        "./sources/addition.js"
    ]
}
```

Here we tell to Coderpower this exercise allows the file `addition.js` located in `./sources/` *(path must be relative to the root directory)* to be edited by the developers.
We will then ensure that written tests still pass after developers submit their changes to the files.

## Folders and files
In this section, we will describe the content of this exercise, as an example for creating your own future content.

The repository contains:

- `sources` folder
- `test` folder
- `.gitignore`
- `meta.json`
- `package.json`
- `README.md`

#### `sources`
Here, the sources folder contains all the files needed to make the tests pass.

```javascript
// addition.js
module.exports = function addition(a , b){
    if( isNaN(a) || isNaN(b))
        return 'isNaN';
        
    return parseInt(a, 10) + parseInt(b, 10);
};
```

#### `test`
Here, the test folder contains all the tests that will validate the sources.

```javascript
var expect = require('expect.js');
var addition = require('../sources/addition.js');

suite('Add two numbers', function(){
    test('Must return "isNaN" if one of the argument is not a number', function(){
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
```

> **Note:** In the `test` directory we have a file `mocha.opts` that allow us to use the TDD style. For more information check [mocha options documentation](https://mochajs.org/#mochaopts).

#### `.gitignore`
As good practice, we ignore the node_modules folder.

```
    node_modules
```

#### `meta.json`
The meta.json file tells where the editable files are.

```json 
    {
        "editables": [
            "./sources/addition.js"
        ]
    }
```
> **Note:** You don't need to make all sources editable. It can be only one file, maybe two. Letting developers work with existing code.

#### `package.json`
The package.json describes the dependencies.

```json
    {
      "name": "javascript exercise sample",
      "version": "1.0.0",
      "description": "Coderpower javascript exercise template",
      "scripts": {
        "test": "mocha"
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/Coderpower/javascript-exercise-template.git"
      },
      "author": "Julian Farhi <julian@coderpower.com>",
      "homepage": "https://github.com/Coderpower/javascript-exercise-template.git#readme",
      "dependencies": {
        "expect.js": "^0.3.1"
      }
    }
```

#### `README.md`
For demonstration purposes we used the `README.md` to explain how the content creation works, but in real cases, the `README.md` would look like this:

```
# Addition
	You will receive two numbers as parameters and the function has to return the addition of both. 
	If one of the parameters cannot be converted as a number, the function must return NaN.
```

If you have any questions regarding the content creation process feel free to contact root@coderpower.com.

