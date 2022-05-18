import './Months.css';
import {NavLink} from "react-router-dom";

const Months = () => {
    return <>
        <div className="months">
            <div className="months__container container">
                <div className="months__field field">
                    <p className="field__header">
                        Введите количество месяцев и нажмите кнопку "Далее".
                    </p>
                    <input className="input months__input" type="text"/>
                    <div className="navigation">
                        <NavLink to="/sum/*">
                            <button className="button sum__button field__button">Назад</button>
                        </NavLink>
                        <NavLink to="/result">
                            <button className="button months__button field__button">Далее</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Months;