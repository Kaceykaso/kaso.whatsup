/**
 *  kaso.whatsup > JS > Main
 *	kaso.rocks | @kaceykaso
 *	GNU GPL 3.0 license
 */

 /** Imports */


/** Variables and things */
const s = '';
let firstName, lastName;
let element = document.getElementById("something");

/** Clicks and clacks */
spinner.addEventListener('click', () => {
    // do something
});

spinner.addEventListener('touchstart', () => {
   // do something
});

spinner.addEventListener('touchcancel', () => {
    // do something
});

/**
 * Something
 * @param {string} foo - does something
 * @returns string
 */
const something = (foo) => {
    //do something

    return foo;
}

/**
 * If document ready, GOOOOOOOOOOOOOOO!
 */
const ready = (fn) => {
    if (document.readyState!== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
