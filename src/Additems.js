import React from 'react'
import { IoAddCircleSharp } from "react-icons/io5";

const Additems = ({newItem,setNewItem,handleNewItem}) => {
  return (
    <form className='adddForm' id='adddId' onSubmit={handleNewItem}>
      <label htmlFor='addItem'></label>
      <input 
        autoFocus
        id='addItem'
        type="text"
        placeholder='Enter the Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit'>
        <IoAddCircleSharp />
      </button>
    </form>
  );
  
}

export default Additems;