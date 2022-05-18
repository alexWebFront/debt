import './Sum.css';
import {NavLink} from "react-router-dom";

const Sum = () => {
    return <>
        <div className="sum">
            <div className="sum__container container">
                <div className="sum__field field">
                    <p className="field__header">
                        Введите сумму и нажмите кнопку "Далее".
                    </p>
                    <input className="input sum__input" type="text"/>
                    <div className="navigation">
                        <NavLink to="/">
                            <button className="button sum__button field__button">Назад</button>
                        </NavLink>
                        <NavLink to="/months">
                            <button className="button sum__button field__button">Далее</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Sum;