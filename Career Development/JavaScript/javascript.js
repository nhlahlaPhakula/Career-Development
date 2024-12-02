/*A JS function to increment on button click*/

let counter = 0;
function increment() {
    counter++;

    //console
    console.log("Counter:" + counter);
    //display on div
    let result = counter;
    document.getElementById('feedback').innerHTML = result;
    //document.getElementsByClassName("feedback").innerHTML = counter;
    
};

/*A JS function to minus/decrement*/

function decrement() {
    --counter;

    console.log("Counter:" + counter);

    let result = counter;
    document.getElementById('feedback').innerHTML = result;

}
