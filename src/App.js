import logo from './logo.svg';
import './App.css';
import Items from './components/Items';
import NewItem from './components/NewItem/NewItem';
import { useState } from 'react';
const items_initial=[
  {
    id:"e1",
    itmTitle:"Water Bottle",
    itmCost:50,
    itmPurDate:new Date(2022,3,20),
  },
  {
    id:"e2",
    itmTitle:"Laptop",
    itmCost:500000,
    itmPurDate:new Date(2022,3,20),
  },
  {
    id:"e3",
    itmTitle:"Marker",
    itmCost:60,
    itmPurDate:new Date(2020,5,2),
  }
];
const App=()=> {
  //const itemTitle="New title"
  const [items,setItems]=useState(items_initial);
  
  const addItemHandler=(item)=>
  {
    //console.log(item);
    setItems((prevItems)=>{return [item,...prevItems]})
  }
  return (
    // <div className="App">
    //  <ShoppingItem itemTitle={items[0].itmTitle}
    //    itemCost={items[0].itmCost}
    //    itemPurchaseDate={items[0].itmPurDate} />
    //  <ShoppingItem itemTitle={items[1].itmTitle}
    //    itemCost={items[1].itmCost}
    //    itemPurchaseDate={items[1].itmPurDate}
    //  />
    //  <ShoppingItem itemTitle={items[2].itmTitle}
    //    itemCost={items[2].itmCost}
    //    itemPurchaseDate={items[2].itmPurDate}
    //  />
  
   // </div>
   <div>
     <NewItem onAddItem={addItemHandler}></NewItem>
<Items items={items}></Items>   </div>
  );
}

export default App;
