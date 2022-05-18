import './Result.css';
import {NavLink} from "react-router-dom";

const Result = () => {
    return <>
        <div className="result">
            <div className="result__container container">
                <div className="result__field field">
                    <p className="field__header">
                        Невероятные математические расчёты
                    </p>
                    <p>
                        здесь будет результат
                    </p>
                </div>
                <div className="navigation">
                    <NavLink to="/months/*">
                        <button className="button result__button field__button">Назад</button>
                    </NavLink>
                    <NavLink to="/">
                        <button className="button result__button field__button">На главную</button>
                    </NavLink>
                </div>
            </div>
        </div>
    </>
}

export default Result;