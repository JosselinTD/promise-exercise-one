Exercise template - javascript
====================================
## How it works
### Concepts
Exercises on Coderpower can be **Discoveries**, **Practices** or **Challenges**.

- **Disovery** : An exercise that show off, by the example, how a library, framework, SDK, API, or design pattern works. It provides an initial solution that can be tweaked by the developers.


- **Practice** : An exercice that let the developers struggle with a subject making them understand the concept by practicing. The developers can try to solve the exercise as many time as they want.

- **Challenge** : An exercise where the developers are faced with others to solve the problem. They are assessed on two criteria.
    - **The Ranking** : For each challenges we define:
        - a base score: ( **X** ), 
        - a bonus score: ( **Y** ),
        - a bonus time: ( **T** ) 
            - **1st** participant finding the solution wins **100%** of **X** 
            - **2nd** participant wins **80%** of **X**
            - **3rd** wins **70%** of **X**
            - **4th** wins **60%** of **X**
            - **5th** and **next** win **50%** of **X**
    - **The time** : For those who find the solution in less than **T**, we’ll apply the % of **T** consumned, to **Y** and add it to their base score.

### Imports
Exercises on Coderpower are not more than repositories. The creation process is juste a clone of the repository, on the server, then we parse some key information like the written tests, readme.md, and the meta.json (we will talk about this one in the next section).


## **Requirements**
### Testing framework
Behind the scene, Coderpower validates participations by running tests. We have specific requirements for each languages regarding the testing framework.  

For the **javascript** language we use [mocha](https://mochajs.org/).

You can use any assertion/mocking library you like but don't forget to add it to your `package.json`.

>As an example, at Coderpower we like to use :

>- [expect.js](https://github.com/Automattic/expect.js) 
`npm install expect.js --save`
- [should.js](https://shouldjs.github.io/) 
 `npm install should --save`
- [sinon.js](http://sinonjs.org/)
`npm install sinon --save`

<h3 style="color: red">/!\ Important /!\ </h3>
For performance matters all code that take more than **3 seconds** to run we be killed. You need to take this into account when you design your test suites, especially for asynchronous code.

### Content
In order to import a repository into the Coderpower platform you need to provide some information.

- Readme.md : The readme will be parsed and take as the **subject** of your exercise.
- meta.json : The file describes which sources will be **editables** by the developers. Here is an example : 

```json
{
    "editables": [
        "./sources/addition.js"
    ]
}
```
Here we tell to Coderpower this exercise allows the file `addition.js` located in `./sources/` *(path must be relative to the root directory)* to be edited by the developers.

We will then ensure that the written tests still pass after developers submit their changes to this file.



## **Folders and files**
In this section we will describe the content of this exercise, used as example for futur content creation.

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
module.exports = function addition(a , b){
    if( isNaN(a) || isNaN(b))
        return 'isNaN';
        
    return parseInt(a, 10) + parseInt(b, 10);
};
```

#### `test`
Here, the test folder contains all the tests that will validate the sources:

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
As a good practice, we ignore the node_modules folder.

```
    /node_modules
```
#### `meta.json`
The meta.json file tells where the editables files are.

```json 
    {
        "editables": [
            "./sources/addition.js"
        ]
    }
```
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
For demonstration purposes we used the README.md to explain how the content creation works, but in real cases, the README.md would look like so: 

```
# Addition
	You will receive two numbers the function has the addition of both. 
	If one the parameter cannot be converted as a number the function must return NaN.
```





