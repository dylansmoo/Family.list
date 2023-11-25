function addTodo() {
    var newTodo = document.getElementById("newTodo").value;
    if (newTodo) {
        var li = document.createElement("li");
        li.textContent = newTodo;
        var removeBtn = createRemoveButton();
        li.appendChild(removeBtn);
        document.getElementById("todoItems").appendChild(li);
        document.getElementById("newTodo").value = '';
    }
}

function addShoppingItem() {
    var newShoppingItem = document.getElementById("newShoppingItem").value;
    if (newShoppingItem) {
        var li = document.createElement("li");
        li.textContent = newShoppingItem;
        var removeBtn = createRemoveButton();
        li.appendChild(removeBtn);
        document.getElementById("shoppingItems").appendChild(li);
        document.getElementById("newShoppingItem").value = '';
    }
}   

function createRemoveButton()   {
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function(e) {
        e.target.parentNode.remove();
    };
    return removeBtn;
}