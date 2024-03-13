document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // grab our form and create an event listener for the submit button
  const form = document.querySelector("form");

  // add task from the form submission to to-do list
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskInput = event.target.new_task_description.value;
    addTask(taskInput);

    // reset form after task is added
    form.reset();
  });

  // create a function to add task from the form submission to the DOM with a delete button
  function addTask(taskInput) {
    // create new task DOM element
    let newTask = document.createElement("p");
    newTask.textContent = taskInput;

    // create delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = " X";
    deleteButton.addEventListener("click", handleDelete);

    // append delete button as a child to the new task
    newTask.append(deleteButton);

    // add the new task (and button) to the DOM
    document.querySelector("#tasks").appendChild(newTask);
  }

  // create function to handle the button delete event
  function handleDelete(event) {
    event.target.parentNode.remove();
  }
});
