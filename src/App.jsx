
import './app.css'
import Home from './pages/home/Home'
import About from './pages/home/about'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 return(
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
       
    </div>
 )
}
export default App