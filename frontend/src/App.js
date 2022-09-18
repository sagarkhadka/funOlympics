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
      <div className=" flex flex-col min-h-[100vh]">
        <div className="navWrapper">
          <Nav />
        </div>
        <div className="mainWrapper flex-1">
          <Routes>
            <Route path='/' element ={ <Home /> } />
            <Route path='/login' element ={ <Login /> } />
            <Route path='/signup' element ={ <Userregister /> } />
            <Route path='/news' element ={ <News /> } />
            <Route path='/news/:id' element ={ <Read /> } />
            <Route path='/play' element = { <Play /> } />
          </Routes>
        </div>
        <div className="footerWrapper">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
