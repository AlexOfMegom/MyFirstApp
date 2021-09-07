import React, { useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

import style from './Todo.module.css';


const Todo = () => {

    const[todo,setTodo] = useState([
    {
        id:1,
        title: 'first todo',
        status: true
    },   
    {
        id:2,
        title: 'second todo',
        status: true
    },  
    {
        id:3,
        title: 'third todo',
        status: false
    }  

    ]);


    return (
        <div className={style.contentContainer}>
            <h1>A To-do list for your schedule </h1>
            <AddTodo setTodo={setTodo} todo={todo}/>
            <TodoList todo={todo} setTodo={setTodo} />
        </div>
    );
};

export default Todo;