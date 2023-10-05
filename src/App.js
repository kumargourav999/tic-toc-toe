import logo from './logo.svg';
import './App.css';
import Tictactoe from './Tictactoe';
import { Usersname } from './Usersname';
import  {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div >
     
       <BrowserRouter>
     
      
     
      <Routes>
        <Route path="/" element={<Usersname/>}></Route>
        <Route path='/startgame' element={<Tictactoe/>}></Route>
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
