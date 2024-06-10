import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import Additems from './Additems';
import ItemList from './ItemList';

function App() {
  const [itemse,setItem]=useState(JSON.parse(localStorage.getItem("todoList"))
    
  ); 
const[newItem,setNewItem]=useState('');



const addItem = (items) => {
  const id = itemse.length ? itemse[itemse.length - 1].id + 1 : 1;
  const addNewItem = { id, checked: false, itemName:newItem };
  const listItem = [...itemse, addNewItem]; // Use spread operator to create a new array
  setItem(listItem);
  localStorage.setItem("todoList", JSON.stringify(listItem));
}

   function handleChecked(id){
    const listItem= itemse.map((items)=>items.id===id ? {...items,checked:!items.checked}: items);
    setItem(listItem)
    localStorage.setItem("todoList",JSON.stringify(listItem))
   }
  function handleDelete(id){
  const listItem=itemse.filter((items)=>items.id!==id);
  setItem(listItem)
  localStorage.setItem("todoList",JSON.stringify(listItem))
  }
  const handleNewItem = (e) => {
    e.preventDefault();
    if (!newItem)  
      return;   
    addItem();
    setNewItem('');
  }



  return (
    <div className='App'>

      <Header/>
      <Additems
      newItem={newItem}
      setNewItem={setNewItem}
      handleNewItem={handleNewItem}/>

      <Content
      itemse = {itemse}
      handleChecked = {handleChecked}
      handleDelete = {handleDelete}
      />
      
      <Footer
      length={itemse.length} />
    </div>
        
  );
}

export default App;
