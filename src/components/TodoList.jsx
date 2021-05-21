import React from "react";

const TodoList = (props) => {

    const content = (props.data && props.data.length > 0) ? props.data.map((item) => {
            return (
                <label className="list-group-item" key={item}>
                <input className="form-check-input me-1" type="checkbox" value="" />
                {item}
              </label>
            ) 
    }) : 'No todos Found' ;

  return (
    <div className="list-group">
        {content}
    </div>
  );
};

export default TodoList;
