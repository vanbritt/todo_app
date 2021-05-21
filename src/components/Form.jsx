import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  onChange(event){
      this.setState({
          [event.target.name]: event.target.value,
      });

      console.log(this.state.todo)
  }
  onSubmit(event){
      event.preventDefault();
      console.log(this.state.todo);
      if(this.state.todo){
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ""
        })
      }else{
          alert("Please Fill in a todo");
      }
        
  }

  render() {
    return (
      <form className="row col-12" onSubmit={this.onSubmit.bind(this)}>
        <div className="col-sm-8">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Todo
          </label>
          <input type="text" className="form-control" value={this.state.todo} onChange={this.onChange.bind(this)} name="todo" id="todo"placeholder="Todo"/>
        </div>
        <div className="col-sm-3">
          <button type="submit" className="btn btn-primary mb-3">
            Add Todo
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
