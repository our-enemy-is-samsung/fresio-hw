import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Booting from "./pages/booting.tsx";
import Button from "./components/Button.tsx"
import"./design/colors.css"

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/boot" element={<Booting/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
