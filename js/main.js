function howdy() {
    console.log('Lauren Yockey says hi!');
}

howdy();


var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log("I'm sorry, that's too many to count.");
    } else {
        console.log('7, what a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

///////////////////////////////////

function moviePrinter(movie) {
    console.log(movie + ' is a fantastic movie.');
}

function inception(display, favMovie) {
    display(favMovie);
    /*moviePrinter('Inception');*/
}

inception(moviePrinter, 'The Princess Bride');
