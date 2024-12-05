import { useReducer } from 'react'

    const initialState = { count:0 };

    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return {count: state.count + 1};
            case "decrement":
                return {count: state.count - 1};
            case "reset":
                return {count: 0};
            default:
                throw new Error("Unknown type");
        }
    }

function Counter1() {

     const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Count:{state.count}</h2>  
      <button onClick={()=> dispatch({type : "increment"})}>increment</button>
      <button onClick={()=> dispatch({type : "decrement"})}>decrement</button>
      <button onClick={()=> dispatch({type : "reset"})}>reset</button>
    </>
  )
}

export default Counter1
