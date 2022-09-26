import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar";
import Adminlogin from './pages/Adminlogin'
import Homepage from "./pages/Homepage";
import News from "./pages/News";

function App() {
  return (
    <>
      <div className="flex gap-5">
        <Sidebar />
        <div className="w-full">
          <Routes>
            <Route path='login' element = { <Adminlogin /> } />
            <Route path='/' element = { <Homepage /> } />
            <Route path='news' element = { <News /> } />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
