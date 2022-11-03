import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Form from './Components/Form';
import All from './Components/All';
import One from './Components/One'
import Edit from './Components/Edit'




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form/>}/>
        <Route path='/allAuthors' element={<All/>}/>
        <Route path='/author/:id' element={<One/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
