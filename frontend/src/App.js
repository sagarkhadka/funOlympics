// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Userlogin";
import Footer from "./components/Footer";
import Userregister from "./pages/Userregister";
import Read from "./pages/Read";
import News from "./pages/News";
import Play from "./pages/Play";

function App() {
  return (
    <>
      <div className="">
        <div className="">
          <Nav />
        </div>
        <Routes>
          <Route path='/' element ={ <Home /> } />
          <Route path='/login' element ={ <Login /> } />
          <Route path='/signup' element ={ <Userregister /> } />
          <Route path='/news' element ={ <News /> } />
          <Route path='/news/:id' element ={ <Read /> } />
          <Route></Route> path='/play' element = { <Play /> } />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
