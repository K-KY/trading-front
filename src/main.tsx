import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from "./components/Home.tsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Home>
            </Home>
        </BrowserRouter>
    </StrictMode>,
)
