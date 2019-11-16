/*
    By: Rayan Alkhelaiwi
    For General Assembly's Front-End Web Development
    To-do List Website
*/

$(document).ready(function () {

    console.log("jQuery's Connected.");

    var userInputBox = document.getElementById("userInputBox"); //$("#userInputBox");
    var addBtn = $("#addBtn");
    var itemsList = document.querySelector("ul"); // $("#items");

    // Accept items on button click
    function addItemsClick() {

        var createItems = document.createElement("li");
        var itemsNode = document.createTextNode(userInputBox.value);

        if (userInputBox.value.length > 0) { // To make sure not to add empty items (without the user's input).
            createItems.appendChild(itemsNode);
            itemsList.appendChild(createItems);
        }

        userInputBox.value = ""; // Reset the Input box after adding the item.

        function completeItem() {
            createItems.classList.toggle("completeItem");
        }
        createItems.addEventListener("click", completeItem);

        // function deleteItem() {
        //     var key = (event.keyCode ? event.keyCode : event.which); // Backspace button code = 8
        //     if (key == 8) {
        //         createItems.classList.add("deleteItem");
        //     }
        // }
        // createItems.addEventListener("keypress", deleteItem);

    }

    // Accept items on Enter press (From keyboard)
    function addItemsEnterPress() {
        var key = (event.keyCode ? event.keyCode : event.which); // Enter button code = 13
        if (key == 13) {
            addItemsClick();
        }
    }

    addBtn.click(addItemsClick);
    userInputBox.addEventListener('keypress', addItemsEnterPress);

    // var body = document.getElementsByTagName("body");
    // body[0].innerHTML(); // Saves the state of the website in case of refresh (Saves entered items)
});