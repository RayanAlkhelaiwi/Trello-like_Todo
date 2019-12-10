/*
    By: Rayan Alkhelaiwi
    For General Assembly's Front-End Web Development
    To-do List Website
*/

$(document).ready(function () {

    var userInputBox = document.getElementById("userInputBox");
    var addBtn = $("#addBtn");
    var addedItemsList = document.querySelector("#AddedItems");
    var completedItemsList = document.querySelector("#completedItems");

    // Accept items on button click
    var liIdCounter = 1; // To have dynamic id for each list item
    function addItemsClick() {
        var createItems = document.createElement("li");
        // var dividor = document.createElement("hr");
        createItems.setAttribute("id", "li" + (liIdCounter++));
        var itemsNode = document.createTextNode(userInputBox.value);
        createItems.appendChild(itemsNode);

        // Form Validation: To make sure not to add empty items or spaces
        if (userInputBox.value.length > 0 && userInputBox.value.trim() != "") {
            addedItemsList.appendChild(createItems);
            // addedItemsList.appendChild(dividor);
        }

        userInputBox.value = ""; // Reset the Input box after adding the item

        // To Mark the item as completed and move it to the completed section
        var isClicked = false;
        function completeItem() {
            createItems.classList.toggle("completeItem");
            if (!isClicked) {
                completedItemsList.appendChild(createItems);
                // completedItemsList.appendChild(dividor);

                isClicked = true;
            } else {
                addedItemsList.appendChild(createItems);
                // addedItemsList.appendChild(dividor);
                isClicked = false;
            }
        }
        createItems.addEventListener("click", completeItem);

        // To Delete an item
        var deleteBtn = document.createElement("button");
        var deleteBtnNode = document.createTextNode("x");
        deleteBtn.appendChild(deleteBtnNode);
        createItems.appendChild(deleteBtn);

        function deleteItem() {
            createItems.classList.add("deleteItem");
        }
        deleteBtn.addEventListener("click", deleteItem);
    }
    addBtn.click(addItemsClick);

    // Accepts items on Enter press (From keyboard)
    function addItemsEnterPress() {
        var key = (event.keyCode ? event.keyCode : event.which); // Enter button code = 13
        if (key == 13) {
            addItemsClick();
        }
    }
    userInputBox.addEventListener('keypress', addItemsEnterPress);

    // The scrollTo Button to let it scrolls to the top
    $('#displayWhenScrolling').click(function () {
        $.scrollTo('#topOfPage', 1000);
    });

    // Displays the scrollTo button when the first element disappears (No Success)
    var upBtnWaypoint = new Waypoint({
        element: document.getElementById('userInputBox'),
        handler: function (direction) {
            if (direction === 'down') {
                $('#displayWhenScrolling').delay(500).fadeIn();
            }
            if (direction === 'up') {
                $('#displayWhenScrolling').fadeOut();
            }
        },
        offset: 1500
    });
});