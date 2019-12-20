import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Note from './Note'
import ToDoApp from './ToDoApp';
import './ToDoApp.css'


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={ToDoApp}></Route>
                <Route path='/edit/:text' exact component={Note}></Route>
            </Switch>
        </Router>
    )
}

export default App
