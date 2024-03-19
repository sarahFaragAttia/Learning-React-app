import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes,useParams } from 'react-router-dom';
import Home from './component/Home';
import UserDetails from './component/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/details/:index"  element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
