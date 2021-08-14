import './App.css';
import store from './store';


function App() {
  store.dispatch({
    type: "bugAdded",
    payload: {
      description: "BugAmr"
    }
  })
  store.dispatch({
    type: "bugRemoved",
    payload: {
      id: 1,
    }
  })
  console.log(store.getState())

  return (
    <div className="App">


      <h1>Hello World</h1>
    </div>
  );
}

export default App;
