
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
    WTF.init( '1-ON4dQA1b_i67fD2bKoUFlv2UYDEVducS-xgSSv6NZA' );
    var showThe = false
    var the = document.getElementById('the')

    the.addEventListener('click', function (e) {
        showThe = !showThe
        e.preventDefault()
        if(showThe) {
            $('#output').addClass('the')
        }
        else {
            $('#output').removeClass('the')
        }  
        return false;
    })
});