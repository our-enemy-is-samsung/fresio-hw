import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootingPage from "./pages/booting/bootingPage.tsx";
import { SettingPage } from "./pages/booting/settingPage.tsx";
import MainPage from "./pages/main/mainPage.tsx";
import RecipeTimerPage from "./pages/main/recipeTimerPage.tsx";
import AIAnswerPage from "./pages/main/aiAnswerPage.tsx";
import "./design/colors.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const widNhei = () => {
            const container = document.getElementsByClassName("viewport-box")[0];
            if (container) {
                container.style.width = `${window.innerWidth}px`;
                container.style.height = `${window.innerHeight}px`;
                localStorage.setItem("width",container.style.width )
                localStorage.setItem("height",container.style.height )
            }
        };
        widNhei();
    }, []);

    return (
        <div className="container">
            <div className="viewport-box">
                <BrowserRouter>
                    <Routes>
                        <Route path="/boot" element={<BootingPage />} />
                        <Route path="/set" element={<SettingPage />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/recipe" element={<RecipeTimerPage />} />
                        <Route path="/aiAnswer" element={<AIAnswerPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
