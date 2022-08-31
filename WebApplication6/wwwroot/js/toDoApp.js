let addBtn = document.querySelector("#add");
let task = document.querySelector("#addTask")
let taskDiv = document.querySelector(".tasks");
let delBtn = document.querySelector("#del")
let isActive = false;
let cssDel = "color: gray; font-size:17px; float:right;"
let cssDate = "font-family:sans-serif; float:right; margin-right:10px"
let delElement;


window.addEventListener('load', () => {
    todos.forEach((todo) => {
        let li1 = document.createElement("li");
        li1.append(todo);
        taskDiv.append(li1);
    })
})

const getTodosFromStorage = () => {
    const storage = JSON.parse(localStorage.getItem('todos'));
    return (storage) ? storage : [];
}
let todos = getTodosFromStorage();

task.addEventListener("keydown", (e) => {
    let now = new Date();
    if (e.isComposing || e.keyCode === 13) {
        if (task.value.length == 0) {
            alert("Enter Task please!");
        } else {
            let li = document.createElement("li");
            li.style.listStyleType = "number";
            let input = task.value;
            todos.push(task.value);
            let t = document.createTextNode(input);
            let hour = now.getHours(); let min = now.getMinutes();

            let str = hour + ":" + min + "  ";
            let spanDate = document.createElement('span');
            spanDate.style.cssText = cssDate;
            spanDate.append(str);
            li.append(t);
            li.append(spanDate);

            taskDiv.append(li);
            task.value = "";
            localStorage.setItem('todos', JSON.stringify(todos));

        }
    }

});

addBtn.addEventListener("click", () => {
    let now = new Date();
    if (task.value.length == 0) {
        alert("Enter Task please!")
    } else {
        let li = document.createElement("li");
        li.style.listStyleType = "number";
        let input = task.value;
        todos.push(task.value);
        let t = document.createTextNode(input);
        let hour = now.getHours(); let min = now.getMinutes();

        let str = hour + ":" + min + "  ";
        let spanDate = document.createElement('span');
        spanDate.style.cssText = cssDate;
        spanDate.append(str);
        li.append(t);
        li.append(spanDate);

        taskDiv.append(li);
        task.value = "";
        localStorage.setItem('todos', JSON.stringify(todos));

    }
});





taskDiv.addEventListener("dblclick", e => {
    if (e.target.innerText != "") {
        const itemIndex = todos.indexOf(e.target.innerText)
        console.log(itemIndex)

        todos.splice(itemIndex, 1)
        localStorage.setItem('todos', JSON.stringify(todos));
        taskDiv.removeChild(e.target);
    }
})

taskDiv.addEventListener("click", e => {

    if (e.target.innerText != "" && isActive == false) {
        e.target.style.textDecoration = "line-through";
        isActive = true;
    } else if (e.target.innerText != "" && isActive == true) {
        e.target.style.textDecoration = "none";
        isActive = false;
    }
})

delBtn.addEventListener("click", () => {
    let li = Array.from(document.querySelectorAll("li"));

    if (li.length > 0) {
        for (let i = 0; i < li.length; i++) {
            taskDiv.removeChild(li[i]);
        }
    }
    localStorage.clear();



})
