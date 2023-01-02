import "./App.css"
import Health from './Components/Health';
import Diet from './Components/Diet';

const App = () => {
  return (
    <div style={{display: 'grid', gridTemplateColumns: '250px auto'}} className="App">
      <div><Health /></div>
      <div><Diet /></div>
    </div>
  )
}

export default App;
