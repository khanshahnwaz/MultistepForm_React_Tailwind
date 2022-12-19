import logo from './logo.svg';
import './App.css';
import SignUp from './Components/Signup'
import Data from './Components/Data';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { FormData } from './Context/FormData';
function App() {
  return (
    
    <div className="App">
      <FormData>
      <Router>
        <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/data' element={<Data/>}/>
        </Routes>
      </Router>
      </FormData>
    </div>
  );
}

export default App;
