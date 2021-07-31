function newItem() {
    //1. Adding a new item to the list in jQuery:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = $('#input');
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    // 2. Crossing out an item from the list in jQuery:
    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

    //3(i) Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode("X"));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    //3(ii) Adding class Delete from the css:
    function deleteListItem() {
        li.addClass('delete');
    }

    // 4. Reordering the items using sortable() jQuery method: 
    $('#list').sortable();

}