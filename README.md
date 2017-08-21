# Asynchronous programming in JavaScript


## Topics
+ Event loop
+ Programming techniques
+ Caveats in testing

### Event loop
+ Handles concurrency for JavaScript. It's more like a strategy but some people call the browser thread which manages a tab "The event loop"

> **Terms to understand:**
> 
> - Concurrency
> - Single threaded
> - Multi threaded

+ Works the same both in the browser and Node
+ In the browsers does couple of things like:
1. Parsing HTML
2. Executing JavaScript code in script elements
3. Reacting to user input (mouse clicks, key presses, etc.)
4. Processing the result of an asynchronous network request

<img src="http://4.bp.blogspot.com/-MYY3w4Y_lAg/VCHi63G4DGI/AAAAAAAAA3c/FrbGjnJbPnQ/s1600/event_loop.jpg" width="700px"/>

> **Terms to understand:**

> - [Blocking code](http://rauschma.github.io/async-examples/blocking.html)
    function sleep(milliseconds) {
		var start = Date.now();
	    while ((Date.now() - start) < milliseconds);
    }
> - I/O bound

**A possible implementation of the event loop**

    while(queue.waitForMessage()) {
	    queue.processNextMessage()
    }

[**This helps to visualise the way it works**](http://latentflip.com/loupe/)

#### Example1:


    function third(str) {
	    console.log(str);
	}
    function second(str) {
	    console.log(str);
	    third("second");
	}
    function first(str) {
	    console.log(str);
	    second("second");
	}
	first("first");
	
> **Terms to understand:**

> - Callstack
> - Run-to-completion (non breakable)

#### Example2

    console.log("first");
    setTimeout(function timeoutCallback() {
	    console.log("second");
    }, 0);
    console.log("third");

 
> **Terms to understand:**

> - The outer world
> - APIs to the outer world (setTimeout, fs.readFile)
> - Web API, C++ API
> - Asynchronous

#### Example3

    $.on('button', 'click', function onClick() {
	    console.log('You clicked the button!');
    });

> **Summary**
> Asynchronous: I have no idea when it's gonna happen.


----------


----------


----------


## Programming techniques

### Event-based

    var openRequest = indexedDB.open('test', 1);
    
    openRequest.onsuccess = function (event) {
        console.log('Success!');
        var db = event.target.result;
    };
    
    openRequest.onerror = function (error) {
        console.log(error);
    };

### Continuation-passing (CPS)

    asyncOperation(arguments, function (err, result) {
	    // Do something
    });

> **Terms to understand**
> 
> - Node style callback -> conventions

    function callback(err, result) {
	    if (err) {
		    return;
	    }
    }
    callback(new Error(), null);
    callback(null, result);

> **Terms to understand**
> 
> - Callback hell
> - Pyramid of Doom
> - Cowhead

```
asyncOp1(param1, function(err, value1) {
	asyncOp2(param2, function(err, value2) {
		asyncOp3(param3, function(err, value3) {	
		// Do something with value3
        });
    });
});
```


### Promises

 - ES6 feature
 - Promises are objects which represent the result of an asynchronous operation.
 - One async operation -> one promise
 - Helps to avert callback hell
 - Helps to control the flow
 
 ```
 asyncOp1
.then(asyncOp2)
.then(asyncOp3)
.then(function (value3) {
	// Do something with value3
})
.catch(function (error) {
    // Handle any error from all above steps
});
 ```

###Generators

 - ES6 feature
 - Generators, are functions that can be paused and resumed.

    
```
function* idMaker() {

  let  index = 0;

  while(true) {
    yield index++;
  }
}

const gen = idMaker();

console.log("value": gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 3
```

----------


----------


----------

## Problems in testing

### Case1: mocking an asynchronous operation

#### Async call
    DbClient.connect(connectString, function (err, db) {
	    // Do something with db
    })
#### Mocked async call

    sinon.stub(DbClient, "connect", function (cStr, callback) {
    
	    var mockedDb = {};
    
	    process.nextTick(function () {
		    callback(null, mockedDb);
	    });
    });

> **Note:**
> If you create a mock/stub for an async operation make that mock asynchronous. Like always...
###Case2: test something asynchronous
####Code example

    class AweSome {
	    start() {
		    DbClient.connect("foo/bar", (err, result) => {
			    this.connected = true;
		    });
	    }
    }
####Test example

    describe("The \"connected\" flag", () => {
	    describe("when the start method runs and the db is up", () => {		
		    it("should get set to true", (done) => {
			    awesome.start();
			    process.nextTick(() => {
				    expect(awesome.flag).to.be.true;
				    done();
			    });
		    });
	    });
    });

> **Things to remember**
> 
> - Use "done" to test something asynchronous
> - Make your assertion run after the asynchronous operation

### Case3 test for an event preceded by an async operation
#### Code example

    class AweSome extends EventEmitter {
	    start() {
	        DbClient.connect("foo/bar", (err, result) => {
	            this.emit("connected", true);
	        });
	    }
    }
#### Test example

    describe("The \"connected\" event", () => {
	    describe("when the start method runs and the db is up", () => {
	        
	        it("should get emitted with true value", (done) => {

				function assertion(value) {
					expect(value).to.be.true;
					done();
				}

				awesome.on("connected", assertion)
				awesome.start()
	        });
	    });
    });

> **Summary**
> This is gonna be tough.



