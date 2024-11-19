import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Booting from "./pages/booting/booting.tsx";
import"./design/colors.css"

function App() {
    return (
        <div className="container">
            <div className="viewport-box">
                <BrowserRouter>
                    <Routes>
                        <Route path="/boot" element={<Booting/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
