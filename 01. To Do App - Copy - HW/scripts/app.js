//to count active items
var toDoCounter = 0;

function saveTodo() {
    let text = $("#txtTodo").val();
    //validations
    if (!text) {
        alert("You must type something")
        return; //get out of function
    }
    toDoCounter++;
    updateCounter();
    let syntax = "<div class='todo-item'>" + text + " <button class='btn btn-sm btn-danger'> Delete </button> </div>"
    
    $("#todoContainer").append(syntax);
    //clear text
    $("#txtTodo").val('');
    $("#txtTodo").focus();

}

function updateCounter(){
    let syntax2 = "<div class='active-todo'> Number of Active To Do: " + toDoCounter + "</div>";
    $("#activeTodo").html(syntax2);
}

function init() {
    //load data
    //hook events

    $("#btnSave").click(saveTodo);
    $("#txtTodo").keypress(function (args) {
        if (args.key == "Enter") {
            saveTodo();
        }
    });
    $("#todoContainer").on('click', '.btn-danger', function () {
        let parentDiv = $(this).parent();
        parentDiv.remove();
        toDoCounter--;
        updateCounter();
    });
}

window.onload = init();