import { Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar";
import Adminlogin from './pages/Adminlogin'
import Homepage from "./pages/Homepage";
import Newnews from "./pages/Newnews";
import News from "./pages/news/News";

function App() {
  return (
    <>
      <div className="flex gap-5">
        <div className="h-[100vh] top-0 sticky">
          <Sidebar />
        </div>
        <div className="w-full mr-6">
          <Routes>
            <Route path='login' element = { <Adminlogin /> } />
            <Route path='/' element = { <Homepage /> } />
            <Route path='news' element = { <News /> } />
            <Route path='news/createnew' element = { <Newnews /> } />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
