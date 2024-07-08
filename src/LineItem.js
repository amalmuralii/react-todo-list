import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item"
            key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
                tabIndex="0"
            />
            <label
                onDoubleClick={() => handleCheck(item.id)}
                style={{ textDecoration: item.checked ? "line-through" : "none" }}
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0" />
        </li>
    )
}

export default LineItem