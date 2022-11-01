window.addEventListener("load", function ()
{
    //Get click element references
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    //counter value
    let counter = 0;

    //click button function - updates the counter
    let clickButtonFunction = function()
    {
        //increment counter
        counter++;

        //update counter value (text)
        clickCounterElement.innerHTML = counter;
    };
    //attach button function
    clickButtonElement.addEventListener("click", clickButtonFunction);
});