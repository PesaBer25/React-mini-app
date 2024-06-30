

function Todo({todo}){
	return(
		<>
			<span>{todo.name}</span>
			<span>{todo.date}</span>
		</>
	);
}

export default Todo;