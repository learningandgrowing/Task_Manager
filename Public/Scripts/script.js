
// $(document).ready(function(){
   
// })
async function getTodos() {
    const resp = await fetch('/tasks', { method: 'GET' })
    const tasks = await resp.json()
    console.log(tasks)
  
    for (const element in tasks) {
      // console.log(`${element}: ${todos[element]}`);
  
      var ul = document.getElementById('tasklist')
  
      var li = document.createElement("li");
      li.setAttribute('id', todos[element].title);
      li.setAttribute('class', 'expandable')
      li.appendChild(document.createTextNode(todos[element].title));
      ul.appendChild(li);
    }
  
    return todos
  }
  
  async function addTodosList() {
    const resp = await fetch('/tasks', { method: 'GET' })
    const todos = await resp.json()
    const len = todos.length - 1;
    console.log(len)
    var ul = document.getElementById('myList')
  
    var li = document.createElement("li");
    li.setAttribute('id', todos[len].title);
    li.appendChild(document.createTextNode(todos[len].title));
    ul.appendChild(li);
  }

  async function addNewTodoUrlEncoded(task, done, due) {
    const resp = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `task=${task}&done=${done}&due=2020-04-05`
    })
  }
  