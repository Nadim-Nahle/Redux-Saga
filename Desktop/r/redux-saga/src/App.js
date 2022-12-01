import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";
import Register from "./pages/register/Register";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </>
    );
  }

}

export default App;
