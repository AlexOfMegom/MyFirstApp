import React, { useState } from 'react';
import { Button,Row,Col, } from 'react-bootstrap';
import style from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit,faLock,faLockOpen} from '@fortawesome/free-solid-svg-icons';

const TodoList = ({todo,setTodo}) => {
    const [edit,setEdit] = useState(null);
    const [value,setValue] = useState('');




const deleteTodo = (id) =>{
    let newTodo = [...todo].filter(item=>item.id!=id);
    setTodo(newTodo);
}

const statusTodo = (id) =>{
    let newTodo = [...todo].filter(item=>{
        if(item.id == id){
            item.status = !item.status;
        }
        return item;  
        
    });
    setTodo(newTodo);

};

const saveTodo = (id) =>{
    let newTodo = [...todo].map(item => {
        if(item.id == id){
            item.title = value;
        }
        return item;
    });
    setTodo(newTodo);
    setEdit(null);
};


const editTodo = (id,title) =>{
    setEdit(id);
    setValue(title);

};




    return (
        <div>
          
            {
            todo.map(item=>(
                <div key={item.id} className={style.listItem}>
                    {
                        edit == item.id ?
                        <div>
                        <input  value={value} onChange={(e)=>setValue(e.target.value) }/>
                        
                        </div>
                        :
                        <div className= {item.status ?style.close :''} >{item.title}</div>
                    }

                    {
                        edit == item.id ?
                        <div>
                            <Button size="sm" variant="primary" onClick={()=>saveTodo(item.id)}>  <FontAwesomeIcon icon={faSave} /> </Button>
                        </div> :
                        <div>
                            <Button size="sm"  variant="success" onClick={()=>deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                            <Button size="sm" className={style.btn} variant="warning" onClick={()=>editTodo(item.id, item.title)}><FontAwesomeIcon icon={faEdit}/></Button>
                            <Button size="sm" className={style.btn} variant="danger" onClick={()=>statusTodo(item.id) }>
                                
                                {
                                    item.status  ?<FontAwesomeIcon icon={faLock}/> : <FontAwesomeIcon icon={faLockOpen}/>
                                }
                            </Button>
                        </div>
                    }
              
                
                </div>
            ))
            }
        
        </div>
    );
};

export default TodoList;