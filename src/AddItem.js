import { FaPlus } from "react-icons/fa"
import { useRef } from "react";


const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef();
    return (
        <form action="" className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                type="text"
                placeholder="Add an item"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="AddItem"
                onClick={() => inputRef.current.focus()}
               >
                <FaPlus />
            </button>

        </form>
    )
}

export default AddItem