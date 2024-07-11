import React,{useReducer} from 'react'
import ReducerExample from './ReducerExample1'
function reducer(state,action){
    if(action.type){
        return{
            age:state.age+1
        }
    }
}


function ReducerComponent(){
   const[state,dispatch] = useReducer(reducer,{age:40})

    return (
        <>
        <button onClick={()=>{dispatch({type:'increment'})}}>Increment age</button>
        <p>Age is incremented as: {state.age}</p>
        <ReducerExample />
        </>
    )
}
export default ReducerComponent;