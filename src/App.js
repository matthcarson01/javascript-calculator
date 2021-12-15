import { useReducer } from 'react';
import NumBttn from './NumBttn';
import './App.css';
export const ACTIONS = {
  CLEAR: "clear",
  SOLVE: "solve",
  ADD_NUMBER: "add-number"
}
const intitalState = {
  operation: '',
  prevOperand: '' ,
  currOperand: '',
}
function reducer(state, {type,payload}){
  switch(type){
    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.SOLVE:
        return {};
    case ACTIONS.ADD_NUMBER:
      if (payload.num === 0 && state.currOperand === "0") {
        return state
      }
      if (payload.num === "." && state.currOperand.includes(".")) {
        return state
      }
      return {
        ...state,
        currOperand: `${state.currOperand || ""}${payload.num}`,
      }
    default:
      return state
  }
}

function App() {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer( reducer, intitalState )
  return (
    <main>
      <header>
        <h2>calc</h2>
      </header>
      <section id="display">
        <div className="input">{`${prevOperand} ${operation}`}</div>
        <div className="results">{currOperand}</div>
      </section>
      <section id="keys">
        { 
          [
              {id:"nine",num:9,dispatch},
              {id:"eight",num:8,dispatch},
              {id:"seven",num:7,dispatch},
              {id:"six",num:6,dispatch},
              {id:"five",num:5,dispatch},
              {id:"four",num:4,dispatch},
              {id:"three",num:3,dispatch},
              {id:"two",num:2,dispatch},
              {id:"one",num:1,dispatch},
              // {id:"zero",num:0,dispatch},
            ].map( 
              button=><NumBttn id={button.id} num={button.num} dispatch={button.dispatch}/> 
              )
          }
        <div id="zero" className="btn-2 bkg-ltgry" onClick={ () => dispatch({ type: ACTIONS.ADD_NUMBER, payload:{num:0}})}  >0</div>
        <div id="decimal" className="btn bkg-ltgry">.</div>
        <div id="divide" className="btn bkg-gry" onClick={() => {}}>/</div>
        <div id="multiply" className="btn bkg-gry" onClick={() => {}}>*</div>
        <div id="subtract" className="btn bkg-gry" onClick={() => {}}>-</div>
        <div id="add" className="btn bkg-gry" onClick={() => {}}>+</div>
        <div id="equals" className="btn-3 bkg-gry" onClick={() => {}}>=</div>
        <div id="clear" className="btn bkg-rd" onClick={() => {}}>AC</div>
      </section>
    </main>
  );
}

export default App;
