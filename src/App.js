
import './App.css';
import Homepage from './components/Homepage';
import { Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './components/Favourites'


function App() {
  return (

    <Routes>
      <Route path='/' element={<Homepage/>}/>     
      <Route path="/favourites" element={ <Favourites/>}/>
    </Routes>
  );

}
export default App;
