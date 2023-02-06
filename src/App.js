import { useReducer } from "react"

export default function counter(){

  const initialState = 0;
const reducer = (state, action)=>{
switch (action) {
  case 'increment':
    
    break;

  default:
    return state;
}
}
useReducer(reducer, initialState);
return(
  <div>
<div>count - 0 </div>
<button type="button">Increment</button>
<button type="button">Decrement</button>

  </div>
)

}