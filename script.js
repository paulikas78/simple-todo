let nextListId = 0
 let taskList = []
 const taskListKey = "tasks"

 localStorage.setItem("some_number", "7")

 initializeData()



 function initializeData() {
   let stringData = localStorage.getItem(taskListKey)
   if (stringData) {
     // convert string stored in local storage to JS array
     taskList = JSON.parse(stringData)

     // add each task name to an unordered list on the page
     for (let i = 0; i < taskList.length; i++) {
       addTaskToPage(taskList[i])
     }
   }
 }


 function addTask() {
   // find input element
   let input = document.getElementById("input-task")
   if (!input) {
     return
   }

   // grab text from input
   let taskName = input.value

   addTaskToPage(taskName)

   // add task to localStorage
   taskList.push(taskName)
   stringData = JSON.stringify(taskList)
   localStorage.setItem(taskListKey, stringData)

   input.value = ""
 }


 function addTaskToPage(taskName) {

   // find existing parent list element
   let taskListElement = document.getElementById("to-do-list")
   if (!taskListElement) {
     return
   }

   // create a new list item
   let newListItem = document.createElement("li")
   newListItem.id = "list-item-" + nextListId
   nextListId += 1
   newListItem.className = "task-list-item"
   newListItem.addEventListener("click", toggleItemState)

   // add text to new list item
   newListItem.innerHTML = taskName

   // add list item to existing list
   taskListElement.appendChild(newListItem)
 }


 function toggleItemState(event) {
   // get item
   let listItem = document.getElementById(event.target.id)
   if (!listItem)
     return

   // change strike-through state
   let isCheckedOff = listItem.style.textDecoration === "line-through"

   listItem.style.textDecoration = isCheckedOff 
     ? "none"
     : "line-through"
   listItem.style.color = isCheckedOff 
     ? "#000000"
     : "#DD0000"
 } 