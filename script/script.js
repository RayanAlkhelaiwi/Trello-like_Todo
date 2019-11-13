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

    addBtn.click(function () {
        if (userInputBox.value.length > 0) { // To make sure not to add empty items (without the user's input).
            var createItems = document.createElement("li");
            var itemsNode = document.createTextNode(userInputBox.value);
            createItems.appendChild(itemsNode);
            itemsList.appendChild(createItems);

            userInputBox.value = ""; // Reset the Input box after adding the item.
        }
    });

});