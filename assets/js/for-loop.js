for ( let i = 0; i < Array.length; i++ ) {
  // ... some code
}



let i = 0;
while ( i < Array.length ) {
    //... some code
    i++;
}

let i = 0;

function handleClick() {
    if ( i < Array.length ) {
        // ... some code
        i++;
        return;
    } else {
        // move on
    }
}

answerButtonEl1.addEventListener(handleClick)