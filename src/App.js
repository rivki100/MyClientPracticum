import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import AddChild from './components/AddChild';
import Guidelines from './components/Guidelines';
import UserDetailsContext from './components/UserDetailsContext';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './components/MyRouter';
import Test from './components/Exel';
function App() {

 

  return (
    <div className="App">
<BrowserRouter>


<UserDetailsContext>
  <h1 >פרקטיקום</h1>
<MyRouter/>

  </UserDetailsContext>
</BrowserRouter>
    </div>
  );
}

export default App;
