
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MovieList/>}>
                

            </Route>
        </Routes>
        </BrowserRouter>

            
        </>
    );
}

export default App;
