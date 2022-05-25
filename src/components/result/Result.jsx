import './Result.css';
import {NavLink} from "react-router-dom";
import {getResult} from "../../redux/state";
import TableItem from "./Table/table-item/Table-item";


const Result = (props) => {

    let getResult = () => {
        props.getResult();
    }

    const resultElements = props.months.map((item) => {
        return <>
            <TableItem id={item.monthsId} result={props.resultPage.result}/>
        </>
    })

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
                    <div className="result__table">
                        {resultElements}
                    </div>
                </div>
                <div className="navigation">
                    <button onClick={getResult} className="button result__button field__button">Произвести расчёт
                    </button>
                    <NavLink to="/">
                        <button onClick={resetTable} className="button result__button field__button">На главную</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
}

export default Result;