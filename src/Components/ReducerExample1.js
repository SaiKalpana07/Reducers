import React, { useReducer } from 'react';
import FormUsingReducer from './FormUsingRedcuer';
const initialState = { count: 0 };
function reducer(state,action){console.log(action.type,state)
    switch(action.type){
        case 'Increment':
            return { count : state.count + 1 };
        case 'Decrement':
            return {count:state.count-1};
        default:
            return state;
    }
}

function ReducerExample(){
    const[state,dispatch] = useReducer(reducer,initialState)
    return(
        <>
        <button onClick={()=>dispatch({type:'Increment'})}>Add one count</button>
        <button onClick={()=>dispatch({type:'Decrement'})}>Reduce one count</button>
        <p>The count is calculated here and the value is {state.count}</p>
        <FormUsingReducer/>
        </>
    )
}

export default ReducerExample;