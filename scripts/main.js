
$(function() {

    // Populate using an object literal

    // WTF.init({

    //     heading: [
    //         "It's a fucking",
    //         "Check this shit out, a fucking"
    //     ],
    //     response: [
    //         "Already fucking seen one",
    //         "Give me a-fucking-nother one",
    //         "Don't really give a fuck"
    //     ],
    //     template: [
    //         "Big @color @animal",
    //         "Silly @animal with @color fur"
    //     ],
    //     animal: [
    //         "dog",
    //         "cat",
    //         "rabbit"
    //     ],
    //     color: [
    //         "red",
    //         "blue",
    //         "green",
    //         "yellow"
    //     ]
    // });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    WTF.init( '1Raq9fRIV2x5vQc4uDZpbWSmZbqmFg9wDi4hin2mO_lo', {numItems: 10} );
    setTimeout(function () {
        var names = [];
        for(var i = 0; i <= 1000; i++) {
            names.push(WTF.getRandomIdea()[1]);
        }
        console.log(names.join(','));
    }, 1000);
});