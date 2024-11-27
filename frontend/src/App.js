import Hello from './components/Hello'

function App() {
  const func = () => {
    console.log(process.env.REACT_APP_TEST);
  }

  return (
    <div className="App">
      <h1 className="text-6xl text-red-500">ACE Chilifest</h1>
      <button className="bg-purple-500 hover:bg-blue-700 text-white" onClick={func}>.env test</button>
      <Hello></Hello>
    </div>
  );
}

export default App;
