import "./Site-description.css";
import {NavLink} from "react-router-dom";

const SiteDescription = () => {
    return <>
        <div className="description">
            <div className="description__container container">
                <p className="description__title">
                    Представляю вашему вниманию планировщик выплат по задолженности!
                    Программа включает в себя возможность разбивки платежей по месяцам,
                    так же перерасчёт общей суммы и ежемесячного платежа, при условии,
                    что внесённая сумма превышает
                    ежемесячный платёж.
                </p>
                <NavLink to="/sum">
                    <button className="button description__button">
                        Приступить к расчёту
                    </button>
                </NavLink>
            </div>
        </div>
    </>
}

export default SiteDescription;