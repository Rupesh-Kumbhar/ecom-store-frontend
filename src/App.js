// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import SignUp from "./Components/SignUp/signUp";
import NavbarHome from "./Components/Navbar/navbar";
import Contacts from "./Components/Contact/contact";
import About from "./Components/About/about";
import Store from "./Components/Store/store";
import AdminDashboard from "./Components/AdminPages/adminDashboard/adminDashboard";
import AdminHome from "./Components/AdminPages/adminHome/adminHome";
import AddProduct from "./Components/AdminPages/addProduct/addProduct";

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
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />

          {/* Admin Dashboard Route, nested Admin Home */}
          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            {/* Nested route for Admin Home */}
            <Route path="home" element={<AdminHome />} />
            <Route path="add-product" element ={ <AddProduct /> }  />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
