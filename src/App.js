import { useReducer } from 'react';
import './App.css';

function reducer(state, action){

}

function App() {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(  reducer, {} )
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
        <div id="nine" className="btn bkg-ltgry" onClick={() => {}}>9</div>
        <div id="eight" className="btn bkg-ltgry" onClick={() => {}}>8</div>
        <div id="seven" className="btn bkg-ltgry" onClick={() => {}}>7</div>
        <div id="six" className="btn bkg-ltgry" onClick={() => {}}>6</div>
        <div id="five" className="btn bkg-ltgry" onClick={() => {}}>5</div>
        <div id="four" className="btn bkg-ltgry" onClick={() => {}}>4</div>
        <div id="three" className="btn bkg-ltgry" onClick={() => {}}>3</div>
        <div id="two" className="btn bkg-ltgry" onClick={() => {}}>2</div>
        <div id="one" className="btn bkg-ltgry" onClick={() => {}}>1</div>
        <div id="zero" className="btn-2 bkg-ltgry">0</div>
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
