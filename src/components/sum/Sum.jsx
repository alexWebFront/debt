import './Sum.css';
import {NavLink} from "react-router-dom";

const Sum = (props) => {

    let newSum = (e) => {
        let sum = e.target.value;
        props.getSum(sum);
    }

    return <>
        <div className="sum">
            <div className="sum__container container">
                <div className="sum__field field">
                    <p className="field__header">
                        Введите сумму и нажмите кнопку "Далее".
                    </p>
                    <input onChange={newSum} className="input sum__input" type="text" value={props.sum}/>
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