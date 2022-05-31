import './Table-item.css';


const TableItem = (props) => {
    return <>
        <div className="table__container">
            <div className="result__item">{props.id} месяц - {props.result} рублей</div>
        </div>
    </>
}

export default TableItem;