import './Table-item.css';


const TableItem = (props) => {
    return <>
        <div className="result__item result__item--months">{props.id} месяц.</div>
        <div className="result__item result__item--payment">{props.result} кровных рубасиков.</div>
    </>
}

export default TableItem;