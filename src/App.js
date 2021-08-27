import './App.css';

function App() {
  return (
    <main>
      <header>
        <h2>Calculator</h2>
      </header>
      <section id="display"></section>
      <section id="keys">
        <div id="nine" className="btn bkg-ltgry">9</div>
        <div id="eight" className="btn bkg-ltgry">8</div>
        <div id="seven" className="btn bkg-ltgry">7</div>
        <div id="six" className="btn bkg-ltgry">6</div>
        <div id="five" className="btn bkg-ltgry">5</div>
        <div id="four" className="btn bkg-ltgry">4</div>
        <div id="three" className="btn bkg-ltgry">3</div>
        <div id="two" className="btn bkg-ltgry">2</div>
        <div id="one" className="btn bkg-ltgry">1</div>
        <div id="zero" className="btn-2 bkg-ltgry">0</div>
        <div id="decimal" className="btn bkg-ltgry">.</div>
        <div id="divide" className="btn bkg-gry">/</div>
        <div id="multiply" className="btn bkg-gry">*</div>
        <div id="subtract" className="btn bkg-gry">-</div>
        <div id="add" className="btn bkg-gry">+</div>
        <div id="equals" className="btn-3 bkg-gry">=</div>
        <div id="clear" className="btn bkg-rd">AC</div>
      </section>
    </main>
  );
}

export default App;
