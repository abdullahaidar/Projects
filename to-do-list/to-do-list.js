function createTask() {

    let input = document.getElementById('input');
    let taskList = document.getElementById('taskList');
    let task = document.createElement('p');
    let span = document.createElement('span');
    taskList.appendChild(task);
    task.innerHTML = input.value;
    task.appendChild(span);
    span.innerText = 'X';
    input.value = '';
    span.style.marginLeft = '200px';
    task.classList.add('tasks');

    span.addEventListener('click', function () {
        task.remove()
    })

}


function clearAll() {
    taskList.innerHTML = ''
}
