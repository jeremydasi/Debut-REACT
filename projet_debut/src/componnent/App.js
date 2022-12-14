import logo from '../asset/logo.svg';
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './titre';
import Clock from './Clock';
import Compteur from './Compteur';
import Input from './Input';
import Fruit from './Fruit';
import But from './But';
import TypesExample from './Bootstrap';
import StaticExample from './modal';
import Calorie from './Poids';
import {Route, Routes } from 'react-router-dom';
import Header from './header';
import Login from './Login';
import Colonne from './Kanban'
import Toggle from './Toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {localStorage.getItem("connecter") ? <Header/> : <Login/>}
        <img src={logo} className="App-logo" alt="logo"/>
        
        <Routes>
          <Route path="/Titre" element={<Title name="Jérémy"/>}></Route>
          <Route path="/Timer" element={<Clock/>}></Route>
          <Route path="/Input" element={<Input/>}></Route>
          <Route path="/Fruits" element={<Fruit/>}></Route>
          <Route path="/But" element={<But/>}></Route>
          <Route path="/Compteur" element={<Compteur/>}></Route>
          <Route path="/MyComponent" element={<Toggle/>}></Route>
          <Route path="/TypesExample" element={<TypesExample/>}></Route>
          <Route path="/StaticExample" element={<StaticExample/>}></Route>
          <Route path="/Poids" element={<Calorie/>}></Route>
          <Route path="/Kanban" element={<Colonne/>}></Route>
        </Routes>
      </header>
    </div>
  );
}  

export default App;
