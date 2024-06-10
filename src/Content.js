import React from 'react'
import  ItemList from './ItemList';


const Content = ({itemse,handleChecked,handleDelete}) => {

  return (
    <main>
      {(itemse.length)? (
        <ItemList
        itemse = {itemse}
        handleChecked = {handleChecked}
        handleDelete = {handleDelete}
      />
      ):(
      <p>your list is empty</p>)
    }
    </main>
  )
}

export default Content;