// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
}) ();

// ()()  // first () for function definiton and second () for execution

( () => {
    // unnamed iife
    console.log(`DB CONNECTED TWO`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('aman')
