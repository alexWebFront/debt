import './App.css';
import Sum from "./components/sum/Sum";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SiteDescription from "./components/site-description/Site-description";
import Months from "./components/months/Months";
import Result from "./components/result/Result";

const App = () => {
    return <>
        <BrowserRouter>
            <div className="page">
                <div className="page__container">
                    <Routes>
                        <Route path='/' element=<SiteDescription/>/>
                        <Route path='/sum/*' element={<Sum/>}/>
                        <Route path='/months/*' element={<Months/>}/>
                        <Route path='/result/*' element={<Result/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </>
}
export default App;
