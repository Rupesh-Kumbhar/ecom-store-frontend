// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import Home from './Components/Home/home';
import Login from './Components/Login/login';
import SignUp from './Components/SignUp/signUp';
import NavbarHome from './Components/Navbar/navbar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edited from frontend branch <code>src/App.js</code> and save to reload.
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
    <div>
      {/* <h1>On 3000</h1> */}
      <NavbarHome></NavbarHome>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
