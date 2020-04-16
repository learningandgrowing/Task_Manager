let addTask = document.getElementById('button')

addTask.onclick = function() {
  function reqListener() {
    console.log(JSON.parse(this.responseText))
  }

  var req = new XMLHttpRequest()
  req.addEventListener('load', reqListener)
  req.open('GET', '/tasks')
  req.send()
}