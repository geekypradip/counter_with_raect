
import './App.css';
// import Todo from './Components/Todo';
import Counter from './CounterComponent/Counter';

function App() {
  return (
    <div className="App">
     {/* <h1>Todo</h1>
     <Todo/> */}
     <Counter initial={0}/>
    </div>
  );
}

export default App;
