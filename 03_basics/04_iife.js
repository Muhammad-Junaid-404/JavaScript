// Immediately Invoked function expression

(function iife(){
    console.log("DB connected");
})();

// when using two iife semicolon should pe put after the first iife

( (val) => {
    console.log(`${val} function`);
})('iife')


