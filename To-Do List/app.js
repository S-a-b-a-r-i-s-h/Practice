//Selectors
const quotebutton = document.querySelector(".quote-btn");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const sunMoonContainer = document.querySelector(".sun-moon-container");

//Event Listeners
quotebutton.addEventListener("click",get_quotes);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);

//Functions

// const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"));
// sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
document.querySelector(".theme-toggle-button").addEventListener("click",() => {
    document.body.classList.toggle("light")
});

var quotes = ["Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
              "Be brave to stand for what you believe in even if you stand alone.",
              "Never lose hope. Storms make people stronger and never last forever.",
              "Let the improvement of yourself keep you so busy that you have no time to criticize others.",
              "You define your own life. Don't let other people write your script.",
              "Success is not always about greatness. It is about consistency. Consistent hard work leads to success.", 
              "Your time is limited, so don't waste it living someone else's life.",
              "The key to success is consistency.The only way for you to actually take action is to believe in yourself.",
              "Believe in yourself. You are braver than you think , more talented than you know" 
            
            ];
            
function get_quotes()
{
    setInterval(function(){
        var random_number = Math.floor(Math.random() * quotes.length);
        document.getElementById("qbtn").innerHTML = quotes[random_number];
        },8000);
}
get_quotes();
function addTodo(event)
{
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newtodo = document.createElement("li");
    newtodo.innerText = todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    //Mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value="";
}

function deleteCheck(e){
    const item = e.target;
    //Delete todo
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    //Check todo
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) { 
        const mStyle = todo.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    })
}