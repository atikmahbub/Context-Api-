import React ,{useReducer } from 'react';
import './App.css';
import ComponentA from './ComponentA.js';
import Counter from './ReducerCount'


export const CountContext = React.createContext()


const INITIAL_STATE = {
  count : 0 
};

const Reducer = (state ,action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
   
        count : state.count + 1
      }
    case "DECREMENT":
      return {
   
        count : state.count - 1
      }
    case "RESET":
      return INITIAL_STATE    
    default:
      return state
  }
}


export const App  = () => {

  const [ state, dispatch ] = useReducer(Reducer,INITIAL_STATE);

  return (
    <div className="App">
    <CountContext.Provider value = { { state, dispatch } }>
    <h1>Use Reducer With Context Api Example</h1>
    <h2>Parent Counter ---  {state.count} </h2>
    <ComponentA />
    </CountContext.Provider >
    <hr/>
    <Counter name ="React-Hook Reducer Example"/> 
    </div>
  );
}


