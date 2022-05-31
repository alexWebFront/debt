import './Result.css';
import {NavLink} from "react-router-dom";
import TableItem from "./Table/table-item/Table-item";



const Result = (props) => {
    const result = props.months.map((item) => {
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
                    <div className="table">
                        {result}
                    </div>
                </div>
                <div className="navigation">
                    <button className="button result__button field__button" disabled>Заглушка</button>
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