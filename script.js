let tasks = JSON.parse(localStorage.getItem("tasks"))
||[];

tasks.forEach(function(task){
    createTaskElement(task);
});

    

function addTask() {

    let input=document.getElementById("taskInput");

    let task=input.value;
    if(task==="") {
        alert("please enter a task");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks",JSON.stringify(tasks));

    createTaskElement(task);
    input.value="";

    updateTaskCount();

}
    function clearAllTasks(){
        tasks=[];
        localStorage.removeItem("tasks");
        document.getElementById("taskList").innerHTML="";
        updateTaskCount();

    }

    function updateTaskCount(){
        document.getElementById("taskCount").innerText=tasks.length;
    }

    function createTaskElement(task){
   
    let li = document.createElement("li");
    li.innerText = task; 

    li.addEventListener("click",function(){
        li.classList.toggle("completed");
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText="Delete";

    deleteBtn.onclick = function () {
        li.remove();

        tasks=tasks.filter(function(t){
            return t !==task;
        });

     localStorage.setItem("tasks",JSON.stringify(tasks));

     updateTaskCount();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
}

document.getElementById("taskInput").addEventListener("keypress",function(e){
    if (e.key === "Enter"){
        addTask()};
});