import React ,{useContext} from 'react';
import { CountContext } from './App';
import ComponentB from './ComponentB.js'



const ComponentA = () =>{
	return(
		<div>
			<ComponentB/>
		</div>
		)
}

export default ComponentA