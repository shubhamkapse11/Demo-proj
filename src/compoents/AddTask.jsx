import { useState } from 'react';

const addTask  = ( {task, setTask} ) => {

const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    status: '',
});

    const HandleAddTask = (e) => {
        // e.preventDefault();
        setTask([...task, newTask]);
        setNewTask({ title: '', description: '', status: '' });
    }


    return (

        <div className="flex flex-col gap-4  m-10 ">
            <form onSubmit={HandleAddTask}>
           <input  type="text" placeholder="Add a new task" value={newTask.title} onChange={
            (e) => setNewTask({...newTask, title: e.target.value})
           } />
           <input  type="text" placeholder="Add a new task" value={newTask.description} onChange={
            (e) => setNewTask({...newTask, description: e.target.value})
           }     />
           <input  type="text" placeholder="Add a new task" value={newTask.status} onChange={
            (e) => setNewTask({...newTask, status: e.target.value})
           }    required />




    <button className='add-task-button' type='submit'>Add</button>

            </form>
        </div>
    )
}

export default addTask;