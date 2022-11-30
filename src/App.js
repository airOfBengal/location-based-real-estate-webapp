import logo from './logo.svg';
import './App.css';
import { SecondComponent } from './components/SecondComponent';
import AppleComponent from './components/AppleComponent';
import Fruit from './components/Fruit';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Listings from './components/Listings';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';


const theFruits = [
  { id: 1, name: "Apple", color: "red" },
  { id: 2, name: "Orange", color: "orange" },
  { id: 3, name: "Banana", color: "yellow" },
  { id: 4, name: "Kiwi", color: "green" },
  { id: 5, name: "Mango", color: "red" },
  { id: 6, name: "Avocado", color: "green" },
];

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listings' element={<Listings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
