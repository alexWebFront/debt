import './Table-item.css';


const TableItem = (props) => {
debugger
    return <>
            <div className="table-item">{props.id} месяц. {props.result}</div>
    </>
}

export default TableItem;