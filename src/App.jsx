import {useState} from 'react';
import './App.css';
import Tours from './components/Tours.jsx';
import data from './data.js';

function App () {
  const [tours, setTours] = useState (data);
  function removeTour (id) {
    const newTours = tours.filter (tour => tour.id != id);
    setTours (newTours);
  }
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className="btn-white" onClick={() => setTours (data)}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
