const todoList = JSON.parse(localStorage.getItem("js-display")) || [
  { name: "Be hydrated", dueDate: "2025-03-03" },
];
printTask()
function handleRenderTask(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function printTask() {
  let todoListHTML = "";
  todoList.forEach(function(todoObject,i){
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div> 
    <div> ${dueDate}</div> 
    <button onClick="todoList.splice(${i},1);
    printTask();" class="delete-button">Delete</button>`;
    todoListHTML += html;
  })
  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   // const name=todoObject.name;
  //   // const dueDate = todoObject.dueDate;
  //   const { name, dueDate } = todoObject;
  //   const html = `
  //   <div>${name}</div> 
  //   <div> ${dueDate}</div> 
  //   <button onClick="todoList.splice(${i},1);
  //   printTask();" class="delete-button">Delete</button>`;
  //   todoListHTML += html;
  // }
  document.querySelector(".js-display").innerHTML = todoListHTML;
   localStorage.setItem('js-display', JSON.stringify(todoList));
}
function addTask() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value.trim();
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  if(todoList.includes(name)){
      alert("Task already exists!")
      return;
  }
  if (name === "" ) {
      alert("Please enter a task!"); // Prevent empty tasks
      return;
  }
  todoList.push({ 
    // name: name,
    //  dueDate: dueDate
    name,
    dueDate
     });
  inputElement.value = "";
  printTask();
}
