import './Months.css';
import { NavLink } from "react-router-dom";


const Months = (props) => {
    let getMonths = (e) => {
        let monthsCount = e.target.value;
        props.getMonths(monthsCount);
    }

    let getResult = () => {
        props.getResult();
    }

    return <>
        <div className="months">
            <div className="months__container container">
                <div className="months__field field">
                    <p className="field__header">
                        Введите количество месяцев и нажмите кнопку "Далее".
                    </p>
                    <input onChange={getMonths} className="input months__input" type="text" value={props.monthsCount} />
                    <div className="navigation">
                        <NavLink to="/sum/*">
                            <button className="button months__button--prev field__button">Назад</button>
                        </NavLink>
                        <NavLink to="/result">
                            <button onClick={getResult} className="button months__button--next field__button">Далее</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Months;