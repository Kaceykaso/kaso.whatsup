/**
 *  kaso.whatsup > JS > Main
 *	kaso.rocks | @kaceykaso
 *	GNU GPL 3.0 license
 */

 

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
