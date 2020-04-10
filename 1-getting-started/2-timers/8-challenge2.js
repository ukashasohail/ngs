// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

var counter = 0;

var intervalId = setInterval(() => {

    console.log("Hello Word");
    counter += 1;

    if (counter === 5) {
        console.log("done");
        clearInterval(intervalId);
    }
}, 1000);