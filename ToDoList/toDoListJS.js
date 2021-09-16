// For removing the list item
var close = document.getElementsByClassName("close");

//Adding the task to the unordered list
let btnAdd  = document.getElementById("addTask");
btnAdd.addEventListener("click", addTaskToList);

function addTaskToList(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let textNode = document.createTextNode(inputValue);

    li.appendChild(textNode);

    if (inputValue === '' || inputValue == " ") {
        alert("Please input a task.");
    } 
    else {
        document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("task").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("DELETE");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);


    //For removing the list item
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          let div = this.parentElement;
          div.style.display = "none";
        }
    }

}

//Make the listed item be red and line-through
let list = document.querySelector("ul");
list.addEventListener("click", taskDone, false);
// // list.addEventListener('click', function(ev) {
// //   if (ev.target.tagName === 'LI') {
// //     ev.target.classList.toggle('done');
// //   }
// // });

function taskDone(event){
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
      }
}
