import React, { Component } from 'react'
import Form from '../Form';
import TodoList from '../TodoList';

export class Landing extends Component {
    constructor(){
        super();
        this.state={
            data : []
        }
     }
     addTodo(todo){
         this.setState({
             data: [...this.state.data, todo]
         })
     }
    render() {
        return (
            <div>
               <Form addTodo={(todo)=>{ this.addTodo(todo)}}/>
                <TodoList data={this.state.data}/>
            </div>
        )
    }
}

export default Landing
