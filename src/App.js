import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Head from "./components/Header";
import Homepage from "./pages/Site";
import Exterior from "./pages/Exterior";
import Bathroom from "./pages/Bathroom";
import Kitchen from "./pages/Kitchen";
import Finishes from "./pages/Finishes";
import Footer from "./components/Footer";
import SornsenHouse from "./Projects/SHhouse";
import AFrame from "./Projects/AFrame";
import DeweyLn from "./Projects/DeweyLn";
import Portneuf from "./Projects/Portnuef";







function App() {
    return (
        <div>
            <Head />

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='exterior' element={<Exterior />} />
                        <Route path="bathroom" element={<Bathroom />} />
                        <Route path="kitchen" element={<Kitchen />} />
                        <Route path="finishes" element={<Finishes />} />
                        <Route path="sornsenHouse" element={<SornsenHouse />} />
                        <Route path="aframe" element={<AFrame />} />
                        <Route path="deweyLn" element={<DeweyLn />} />
                        <Route path="portneuf" element={<Portneuf />} />
                    </Routes>
                </BrowserRouter>

            <Footer />
        </div>
    )

}
export default App;

