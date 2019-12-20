import React from 'react'
import { Form, Input, Button, Col, Row } from 'antd';

class ToDoInput extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        return this.props.onAdd(this.state.input)
    }
      
    render() {
        return (
        <div className="Input" >
          <Row >
            New ToDo:
            </Row>
          <Row gutter={16}>
                <Col span={20}>
                    <Form.Item>
                        <Input 
                        onChange={event => this.setState({ input: event.target.value })} 
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                <Form.Item>
                    <Button onClick={this.handleClick}>
                    Add
                    </Button>
                </Form.Item></Col>
          </Row>
        </div>
        )
    }
}


export default ToDoInput