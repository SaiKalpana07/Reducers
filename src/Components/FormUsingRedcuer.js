import  React, { useReducer } from 'react';

const initialState = {
    userName:'',
    email:''
}

function reducer(state,action)
{
    switch(action.type){
        case 'userName':
            return {...state, userName:action.payload}
        case 'email':
            return {...state,email:action.payload}
        case 'reset':
             return initialState;
        default:
            throw new Error();
    }
    
}

function FormUsingReducer(){
    const[state,dispatch]=useReducer(reducer,initialState)

    return(
        <>
        <form>
            <label>Username</label>
            <input type="text" value={state.userName} onChange={(e)=>dispatch({type:'userName',payload:e.target.value})}/>
            <label>Email</label>
            <input type="text" value={state.email} onChange={(e)=>dispatch({type:'email',payload:e.target.value})}/>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </form>
        </>
    )

}

export default FormUsingReducer;
