import React,{useReducer} from 'react' ; 


const INITIAL_STATE = {
	count : 0 ,
}

const Reducer = (state,action) =>{
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count : state.count +  1
			}
			break;
		case "DECREMENT":
			return {
				...state,
				count : state.count - 1
			}
		case "RESET":
			return INITIAL_STATE		
		default:
			return state
			break;
	}
}


const Counter = (props) => {
	const [state,dispatch] = useReducer(Reducer , INITIAL_STATE);
	const [seconCount , dispatchTwo] = useReducer(Reducer ,INITIAL_STATE)
	return(
		<div>
			<h1>{props.name}</h1>
			<h2>Counter : {state.count}  </h2>
			<button onClick = { () => dispatch({type: "INCREMENT" })}> + </button>
			<button onClick = { () => dispatch({type: "DECREMENT"})}> - </button>
			<button onClick = { () => dispatch({type: "RESET"})}> RESET </button> 
			<h2>Counter : {seconCount.count}</h2>
			<button onClick = { () => dispatchTwo({type: "INCREMENT"})}> + </button>
			<button onClick = { () => dispatchTwo({type: "DECREMENT"})}> - </button>						
			<button onClick = { () => dispatchTwo({type: "RESET"})}> RESET </button>
		</div>
		)
}

export default Counter