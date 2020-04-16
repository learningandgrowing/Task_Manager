const { Router } = require('express')
const { TaskManager } = require('../database/db')

const route = Router()

async function sortBy(sortvalue){
  const tasks = await TaskManager.findAll({
    order: [                    // ORDER BY age DESC, name ASC
        ['sortvalue', 'ASC']
    ]
  })
  return tasks

}

route.get('/', async (req, res) => {
    const tasks = await TaskManager.findAll()
    res.send(tasks)
})

route.post('/', async (req, res) => {
    if (typeof req.body.task === null) {
      return res.status(400).send({ error: 'Task name not provided' })
    }
    
  
    const newTodo = await TaskManager.create({
        task: req.body.task,
        due: req.body.due,
        status: req.body.status,
        priority: req.body.priority,
        description: req.body.description,
    })
  
    res.status(201).send({ success: 'Notes for the task has been added', data: newTodo })
  })

  route.get('/:id', async (req, res) => {
    if (isNaN(Number(req.params.id))) {
      return res.status(400).send({
        error: 'task id must be an integer',
      })
  }})

    route.patch('/:id', async (req, res) => {
      if (isNaN(Number(req.params.id))) {
        return res.status(400).send({
          error: 'task id must be an integer',
        })
    }})
    
    route.get('/:id/notes', async (req, res) => {
      if (isNaN(Number(req.params.id))) {
        return res.status(400).send({
          error: 'task id must be an integer',
        })
    }})

    route.post('/:id/notes', async (req, res) => {
      if (isNaN(Number(req.params.id))) {
        return res.status(400).send({
          error: 'task id must be an integer',
        })
    }
    const newTodo = await TaskManager.create({
      task: req.body.task,
      due: req.body.due,
      status: req.body.status,
      priority: req.body.priority,
      description: req.body.description,
      notes: req.body.notes
  })

  res.status(201).send({ success: 'Notes for the task has been added', data: newTodo })
  })
    
module.exports = route