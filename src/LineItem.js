import React from 'react'
import { IoTrashSharp } from "react-icons/io5";

const LineItem = ({items,handleChecked,handleDelete}) => {
  return (
    <li className="items">
             
              <input 
              type="checkBox" 
              onChange={()=>handleChecked(items.id)}
              checked={items.checked}>
              </input>

              <label 
              style= {(items.checked) ? {textDecoration:'line-through'}:null}
              onDoubleClick={()=>handleChecked(items.id)}>
                {items.itemName}
              </label>
              
              <IoTrashSharp
              role="button"
              onClick={()=>handleDelete(items.id)}
              tabIndex={0}/>
            </li>
  )
}

export default LineItem