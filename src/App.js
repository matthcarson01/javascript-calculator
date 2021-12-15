import { useReducer } from 'react';
import NumBttn from './NumBttn';
import OpBttn from './OpBttn';
import './App.css';

export const ACTIONS = {
  CLEAR: "clear",
  SOLVE: "solve",
  ADD_NUMBER: "add-number",
  PICK_OP: "pick-op"
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
      return {
        ...state,
        overwrite: true,
        prevOperand: '',
        operation: '',
        currOperand: evaluate(state),
      }
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
    case ACTIONS.PICK_OP:
      if (state.currOperand == null && state.prevOperand == null) {
        return state
      }

      if (state.currOperand == null || state.currOperand == '') {
        return {
          ...state,
          operation: payload.op,
        }
      }

      if (state.prevOperand == null || state.prevOperand == '' ) {
        return {
          ...state,
          operation: payload.op,
          prevOperand: state.currOperand,
          currOperand: null,
        }
      }

      return {
        ...state,
        prevOperand: evaluate(state),
        operation: payload.op,
        currOperand: null,
      }    
    default:
      return state
  }
}

function evaluate({ currOperand, prevOperand, operation }) {
  console.log(`currOperand:${currOperand} prevOperand:${prevOperand}`)
  const prev = parseFloat(prevOperand)
  const current = parseFloat(currOperand)
  if (isNaN(prev) || isNaN(current)) return ""
  let computation = ""
  switch (operation) {
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "÷":
      computation = prev / current
      break
  }

  return computation.toString()
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
            ].map( 
              button=><NumBttn key={button.id}id={button.id} num={button.num} dispatch={button.dispatch}/> 
              )
          }
        <div id="zero" className="btn-2 bkg-ltgry" onClick={ () => dispatch({ type: ACTIONS.ADD_NUMBER, payload:{num:0}})}  >0</div>
        <NumBttn id="decimal" num={"."} dispatch={dispatch}/>
        {
          [
            {id:"divide",op:"/",dispatch},
            {id:"multiply",op:"*",dispatch},
            {id:"subtract",op:"-",dispatch},
            {id:"add",op:"+",dispatch},
          ].map(
            button=><OpBttn key={button.id} id={button.id} op={button.op} dispatch={button.dispatch}/>
          )
        }
        <div id="equals" className="btn-3 bkg-gry" onClick={() => dispatch({ type: ACTIONS.SOLVE })}>=</div>
        <div id="clear" className="btn bkg-rd" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</div>
      </section>
    </main>
  );
}

export default App;
