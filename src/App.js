import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Create from './Pages/Create';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path=':id/edit' element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
