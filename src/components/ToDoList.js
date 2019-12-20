import React from "react"
import { Button} from 'antd';

// const TodoList_ = (props) => (
//     <div className="todo-list">
//         {props.todos.map(item => <p>{item.text}</p>)}
//     </div>
// )

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          todos: props.todos
        }
    }
    
    render() {
        const { todos } = this.props;
        return (
            <div>
                {todos.map(item => 
                    <div className="todo-list"> 
                        <p>
                            {item.text}
                        </p> 
                        <Button className="edit-button">Edit</Button>
                        <Button type="danger" className="delete-button" onClick={() => this.props.Delete(item.text)} >Delete</Button>
                    </div>)
                }
            </div>
        )
    }
};

export default ToDoList
