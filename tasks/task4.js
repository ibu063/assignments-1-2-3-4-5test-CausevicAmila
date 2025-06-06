// ************ TASK DESCRIPTION ************

// Create a function sayHi(name, language) that returns a greeting message like:
// "Hi NAME!" (English), "Hola NAME!" (Spanish), or "Salut NAME!" (French).
// Then, write a curried function hiIn(lang) that fixes the language and returns another function waiting for the name.

/*
* const inFrench = hiIn("French");
* console.log(inFrench("Nina")); // "Salut Nina!"
*/


// TODO

function sayHi(name, language) {
    let greet;
    switch (language) {
        case "English":
            greet = "Hi";
            break;
        case "Spanish":
            greet = "Hola";
            break;
        case "French":
            greet = "Salut";
            break;
        default:
            greet = "Hi";
    }
    return `${greet} ${name}!`;
}

function hiIn(language) {
    return function(name) {
        return sayHi(name, language);
    };
}







// Below this comment any modification is prohibited. 
module.exports = { sayHi, hiIn };
