import './Result.css';
import {NavLink} from "react-router-dom";
import TableItemMonths from "./Table/table-item/Table-item-months";
import TableItemSum from "./Table/table-item/Table-item-sum";


const Result = (props) => {

    const resultMonths = props.months.map((item) => {
        return <>
            <TableItemMonths id={item.monthsId}/>
        </>
    })

    const resultSum = props.months.map((item) => {
        return <>
            <TableItemSum result={props.resultPage.result}/>
        </>
    })

    let getResult = () => {
        props.getResult();
    }

    let resetTable = () => {
        props.resetTable();
    }

    return <>
        <div className="result">
            <div className="result__container container">
                <div className="result__field field">
                    <div className="field__header">
                        <p className="result__sum">Сумма: {props.sum}</p>
                        <p className="result__months">Количество месяцев: {props.monthsCount}</p>
                    </div>
                    <div className="table">
                        <div className="table__months">
                            {resultMonths}
                        </div>
                        <div className="table__sum">
                            {resultSum}
                        </div>
                    </div>
                </div>
                <div className="navigation">
                    <button onClick={getResult} className="button result__button field__button">Произвести расчёт
                    </button>
                    <NavLink to="/">
                        <button onClick={resetTable} className="button result__button field__button">Начать заново
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
}

export default Result;