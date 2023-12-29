import express from 'express';
const app = express();
const port = 3000;
import bodyParser from 'body-parser';

let todos = [];

app.use(bodyParser.json());



app.get('/todos', (req, res) => {
    res.json(todos);
})

app.post('/createTodo', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({ newTodo, message: 'Todo created' });
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})