import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();

    return (
        <form onSubmit={handleSubmit} className='addForm'>
            <label htmlFor="addItem">Add Item</label>
            <input 
                autoFocus
                ref={inputRef}
                type='text'
                id='addItem'
                placeholder='text' 
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button 
                type='submit'
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}>
                    <FaPlus />
            </button>
        </form>
    )
}

export default AddItem