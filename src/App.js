
import './App.css';
import Login from './components/Login';
import { Routes , Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Login/>}>
      </Route>
    </Routes>
  );

}
export default App;
