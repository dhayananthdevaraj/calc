import './App.css';
import { useState } from 'react';
function App() {
const [calc,setCalc] = useState("");
const op = ['/','*','-','+'];
const uc = (value) => {
if(op.includes(value)&&calc ==="" ||
op.includes(value)&&op.includes(calc.slice(-1
)))
return;
setCalc(calc+value);
}
const calcul = () => {
setCalc(eval(calc).toString());
}
const Del = () => {
if(calc==="")
return;
const np = calc.slice(0,-1);
setCalc(np);
}
return (
<div className="App">
<div className='cal'>
<div className='display'>
{calc||0}
</div>
<div className='opert'>
<button onClick={() =>uc('/')}>/</button>
<button onClick={() =>uc('*')}>*</button>
<button onClick={() =>uc('-')}>-</button>
<button onClick={() =>uc('+')}>+</button>
<button onClick={Del}>Del</button>
</div>
<div className='digits'>
<button onClick={() =>uc('1')}>1</button>
<button onClick={() =>uc('2')}>2</button>
<button onClick={() =>uc('3')}>3</button>
<button onClick={() =>uc('4')}>4</button>
<button onClick={() =>uc('5')}>5</button>
<button onClick={() =>uc('6')}>6</button>
<button onClick={() =>uc('7')}>7</button>
<button onClick={() =>uc('8')}>8</button>
<button onClick={() =>uc('9')}>9</button>
<button onClick={() =>uc('0')}>0</button>
<button onClick={() =>calcul()}>=</button>
</div>
</div>
</div>
);
}
export default App;