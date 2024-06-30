import {useState,useEffect} from 'react';
import Todo from './Todo.jsx';
import './App.css';

function Todolist(){
	const [input,setInput] = useState(
	{
		name: "",
		date: ""
	}
	);
	const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );
	const [done,setDone] = useState(JSON.parse(localStorage.getItem("done")) || []);
	useEffect(()=>{
		localStorage.setItem("tasks",JSON.stringify(tasks));
	},[tasks]);
	
	useEffect(()=>{
		localStorage.setItem("done",JSON.stringify(done));
	},[done]);
	
	const taskInput = (e) => {
		setInput(i => {
			return ({...i,name: e.target.value});
		});
	};
	const dateInput = (e) => {
		setInput(i => {
			return {...i,date: e.target.value}
		});
	};
	const addTask = (newTask) => {
		setTasks((t)=>{
			return([...t,newTask]);
		});
	};
	const deleteTask = (target)=>{
		setTasks((t)=>{
			return(t.filter(rem=>rem!==target));
		});
	};
	const addDone = (newTask)=>{
		setDone(d => [...d,newTask]);
	};
	const deleteDone = (target)=>{
		setDone((t)=>{
			return(t.filter(rem=>rem!==target));
		})
	};	
	
	
	return(
		<>
			<h3 className="head">My Todolist <br/><hr/> Add Todo</h3>
			<div className="grid">
				<input type="text" placeholder="Task Name" value={input.name} onChange={taskInput}/>
				<input type="date"  value={input.date} onChange={dateInput}/>
				<button disabled={!(input.name && input.date)} onClick={()=>{
					addTask(input);
					setInput(
						{
							name: "",
							date: ""
						}
					);
					}
				}>Add</button>
				{tasks.length > 0 && <h3>Todo</h3>}
					{tasks.map( (task,i) =>{ 
					   return(
						<>
							<Todo todo={task} key={task}/>
							<button key={i} className="done" onClick={()=>{
								deleteTask(task);
								addDone(task);
							}}>Done</button>
						</>)
					})}
					{done.length > 0 && <h3>Completed Task</h3>}
					{done.map( (task,i) =>{ 
					   return(
						<>
							<Todo todo={task} key={task}/>
							<button key={i} className="delete" onClick={()=>{
								deleteDone(task);
							}}>Delete</button>
						</>)
					})}
			</div>
		</>
	);
}

export default Todolist;