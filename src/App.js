import './App.css';
import Sum from "./components/sum/Sum";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteDescription from "./components/site-description/Site-description";
import Months from "./components/months/Months";
import Result from "./components/result/Result";
import {detection, getMonths, getResult, resetTable} from "./redux/state";

const App = (props) => {
    return <>
        <BrowserRouter>
            <div className="page">
                <div className="page__container">
                    <Routes>
                        <Route path='/' element={<SiteDescription />} />
                        <Route path='/sum/*' element={<Sum
                            getSum={props.getSum}
                            detection={props.detection}/>} />
                        <Route path='/months/*' element={<Months
                            getMonths={props.getMonths}
                            monthsPage={props.state.monthsPage} />} />
                        <Route path='/result/*' element={<Result getResult={props.getResult}
                            resultPage={props.state.resultPage}
                            sum={props.state.sumPage.sum}
                            resetTable={props.resetTable}
                            months={props.state.monthsPage.months}
                            monthsCount={props.state.monthsPage.monthsCount} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </>
}
export default App;
