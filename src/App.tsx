import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BootingPage from "./pages/booting/bootingPage.tsx";
import {SettingPage} from "./pages/booting/settingPage.tsx";
import MainPage from "./pages/main/mainPage.tsx";
import"./design/colors.css"

function App() {
    return (
        <div className="container">
            <div className="viewport-box">
                <BrowserRouter>
                    <Routes>
                        <Route path="/boot" element={<BootingPage/>} />
                        <Route path ="/set" element={<SettingPage/>}/>
                        <Route path="/" element={<MainPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
