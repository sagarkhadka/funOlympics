import { Routes, Route } from "react-router-dom"
import Adminlogin from './pages/Adminlogin'
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element = { <Adminlogin /> } />
        <Route path='/' element = { <Homepage /> } />
      </Routes>
    </>
  );
}

export default App;
