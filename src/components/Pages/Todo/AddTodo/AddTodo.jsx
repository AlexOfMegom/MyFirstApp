import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Row,Col, FormControl} from 'react-bootstrap';
import style from './AddTodo.module.css';

const AddTodo = ({todo,setTodo}) => {

    const [value,setValue] = useState('');

        
    
    // console.log(value)
    const saveTodo = () =>{
        setTodo(
            [...todo,{
                id:uuidv4(),
                title:value,
                status: true
            }]
        );
        setValue('');
    };

    return (
        <Row>
            <Col className={style.AddTodoForm}>
            <FormControl  type="text" placeholder= "Enter the task and Save" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <Button className={style.btn} onClick={saveTodo}>Save</Button>
            </Col>
        </Row>

        
    );
};

export default AddTodo;