const greeting = delay =>
    setTimeout(() => {

        for (let index = 0; index < 5; index++) {
            console.log('Hello World. ' + delay);

        }
        
        greeting(delay + 100);
    }, delay);

greeting(100);