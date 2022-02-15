import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>

        <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/city/:id' element={<TourDetails/>} />
       </Routes>

    </>
  );
}

export default App;
