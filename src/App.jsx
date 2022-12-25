import './App.css'
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Distance from "./Pages/Distance";
// import Background from './components/Background';

function App() {

  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/distance" element={<Distance />} />
      </Routes>
    </div>
  )
}

export default App
