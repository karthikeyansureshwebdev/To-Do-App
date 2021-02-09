
import './App.css';
import React, {useState} from "react";


const AddTask=({addTask})=>{
  const [value, updatevalue] = useState([""])

  const handlesubmit= e =>{
    e.preventDefault();
    if(value !==""){
      addTask(value)
      updatevalue("");
    }
  };

  return(
    <form onSubmit={handlesubmit}>
      <input
       type="text"
       value={value}
       placeholder="Enter your task"
       onChange={e =>updatevalue(e.target.value)}
        />
        <button type="submit">Add</button>
        </form>
  )
};
const Todo= () =>{

  const addTask=text=>updatetask([...task,{text}]);
  const [task,updatetask] = useState([
    
    
  ])

  const toggleTask= index =>{
    const newTask=[...task];
    if(newTask[index].iscomplete){
      newTask[index].iscomplete=false;
    }
    else{
      newTask[index].iscomplete=true;
    }
    updatetask(newTask);
  }
  const removeTask= index =>{
    const newTask=[...task];
    newTask.splice(index,1);
    updatetask(newTask);

  }

    return(
      <div className="todoapp">
        
        <h1>To-Do-List</h1>
        <p>made by Karthik</p>
        
        
        

      
      <div className="todo-tasks">
        <AddTask addTask={addTask} />
        {task.map((task,index)=>(
          <div className="task-status">
            <span onClick={() =>toggleTask(index)} className={task.iscomplete?"task-name completed-task":"task-name"}>
            
            {task.text}
            
            </span>
            <button onClick={()=>removeTask(index)}>X</button>
          
          </div>
        ))}
        
      </div>
      </div>
    )

}



export default Todo;
