import React ,{useContext} from 'react';
import { CountContext } from './App'



const ComponentB = () =>{

	 const { state, dispatch } = useContext(CountContext);
	return(
		<div>
			<h2>Child Counter --- {state.count}</h2>
			
			<button onClick = { () => dispatch({type: "INCREMENT" })}> + </button>
			<button onClick = { () => dispatch({type: "DECREMENT"})}> - </button>
			<button onClick = { () => dispatch({type: "RESET"})}> RESET </button> 
		</div>
		)
}

export default ComponentB