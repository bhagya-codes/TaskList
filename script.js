let createTaskbutton = document.getElementById("create-task-btn")
let taskItems = document.getElementById("tasks")
let errorText = document.getElementById("error-text")
let userInputEl = document.getElementById("user-input")
let userInput

createTaskbutton.addEventListener('click',function() {
    userInput = userInputEl.value
    if(!userInput){
        errorText.textContent ='The task cannot be empty!';
        errorText.className = "error-text"
        setTimeout(function() {
            errorText.textContent = ''; 
            }, 2000);
    } else {
            const newTask = document.createElement("p");
            newTask.textContent = userInput;
            userInputEl.value = ""
            newTask.className = "item"
            taskItems.appendChild(newTask);

    }
})
   
   
   
   
   
   
   
   
   // let userTask = document.getElementById("inp")
    // let createTaskbutton = document.getElementById("createTask-btn")
    // let taskItems = document.getElementById("tasks")
    // let errorText = document.getElementById("error-text")

    // createTaskbutton.addEventListener('click',function() {
    //     let userInput = document.getElementById("user-input").value;
        

    //     if(!userInput){
    //         errorText.textContent ='The task cannot be empty!';
    //         errorText.className = "error-text"
    //         setTimeout(function() {
    //             errorText.textContent = ''; 
    //           }, 2000);
    //     }
            
    //     else {
    //             const newTask = document.createElement("p");
    //             newTask.textContent = userInput;
    //             newTask.className = "item"
    //             taskItems.appendChild(newTask);
    //             userInput = "";
    //         }
    // })








    // if(inputTask === ""){
    //     errorText.textContent = 'The task cannot be empty!'
    // }
    // // else if (userTask. > 5) {
    // //     errorText.textContent = 'Error: Maximum 5 tasks are allowed!';
    // // }
    // else{
    // let newTask = document.createElement('p') 
    // newTask.textContent = inputTask
    // newTask.className = "item"
    // taskItem.append(newTask)
    // newTask.value = ""
    
    // }

    // let inputValue = document.getElementById("inp")
    // let addButton = document.getElementById("add-btn")
    // let container = document.getElementById("container2");


    // addButton.addEventListener('click', function() {
    //     userInput = inputValue.value
    //     let newItem = document.createElement('p');
    //     newItem.className = "item"
    //     newItem.textContent = userInput
    //     container.append(newItem)
    //     userInput.value = " "
        
    //    });

