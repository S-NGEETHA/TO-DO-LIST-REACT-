import React from 'react'
import LineItem from './LineItem';

const items = ({itemse,handleChecked,handleDelete}) => {
  return (
        <ul>
        {
          itemse.map((items)=>(
            <LineItem
            items = {items}
            key={items.id}
            handleChecked = {handleChecked}
            handleDelete = {handleDelete}

            />
          ))
        }

      </ul>
  
  )
}

export default items