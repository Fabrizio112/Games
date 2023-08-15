import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TatetiApp from "./Ta-te-ti/components/TatetiApp";
import MemoryTestApp from "./Memory-Test/components/MemoryTestApp";
import SimonDiceApp from "./Simon-Dice/components/SimonDiceApp";

function GamesApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ta-te-ti" element={<TatetiApp />} />
                <Route path="/memory-test" element={<MemoryTestApp />} />
                <Route path="/simon-dice" element={<SimonDiceApp />} />
            </Routes>
        </HashRouter >);
}

export default GamesApp;