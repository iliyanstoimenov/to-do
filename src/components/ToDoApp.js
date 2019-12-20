import React from 'react'
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';

class ToDoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [
                {
                    id:1,
                    text: "Take out the trash",
                    completed: true
                },
                {
                    id:2,
                    text: "Grocery shopping",
                    completed: false
                },
            ]
        }
    }

    todoadded = (input) => {
        const { todos } = this.state;
        todos.push({ text: input, completed: false })
        this.setState({ todos })
    }

    tododeleted = (text) => {
        const { todos } = this.state;
        const data = todos.filter(item => item.text !== text)
        this.setState({ todos: data})
    }

    render() {
        return (
            <div>
                <div>                            
                    <ToDoInput onAdd={this.todoadded} />
                </div>
                <div>
                    <ToDoList todos={this.state.todos} Delete={this.tododeleted} />
                </div>
            </div>
        );
    }
}

export default ToDoApp
