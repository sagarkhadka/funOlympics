// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Userlogin";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="">
        <div className="">
          <Nav />
        </div>
        <Routes>
          <Route path='/' element ={ <Home /> } />
          <Route path='login' element ={ <Login /> } />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
