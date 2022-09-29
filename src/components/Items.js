import { useState } from "react";
import DateFilter from "./DateFilter";
import "./Items.css";
import ShoppingItem from "./ShoppingItem";
import Card from "./UI/Card";
const Items=(props)=>{

  const items=props.items;   
 const [filteredYear,setFilteredYear]=useState("2022");
  const filterChangeHandler=(selectedYear)=>{
    //alert(selectedYear);
    setFilteredYear(selectedYear);
  }
  const filteredItems=items.filter((item)=>{
    return item.itmPurDate.getFullYear().toString()===filteredYear;
  })
  let itemContent=(<p className="no_items">no matching records</p>);
  if(filteredItems.length>0){
itemContent= filteredItems.length>0 && filteredItems.map((item)=>(
<ShoppingItem 
key={item.id}
itemTitle={item.itmTitle}
itemCost={item.itmCost}
itemPurchaseDate={item.itmPurDate} /> 
))
}
return(
    <Card className="items">
      <DateFilter
      selected={filteredYear}
       onChangeFilter={filterChangeHandler}></DateFilter>
       {itemContent}
  {/*  {filteredItems.length===0 && (<p className="no_items">No Matching records</p>)}
       {filteredItems.length>0 && filteredItems.map((item)=>(
       <ShoppingItem 
      key={item.id}
       itemTitle={item.itmTitle}
       itemCost={item.itmCost}
      itemPurchaseDate={item.itmPurDate} /> 
       )) */}
        {/* {filteredItems.length===0 ?
(<p className="no_items">No Matching records</p>)
      : }
      { filteredItems.map((item)=>(
       <ShoppingItem 
      key={item.id}
       itemTitle={item.itmTitle}
       itemCost={item.itmCost}
      itemPurchaseDate={item.itmPurDate} />
      )) */}

     {/* <ShoppingItem itemTitle={items[0].itmTitle}
       itemCost={items[0].itmCost}
      itemPurchaseDate={items[0].itmPurDate} />
    <ShoppingItem itemTitle={items[1].itmTitle}
     itemCost={items[1].itmCost}
     itemPurchaseDate={items[1].itmPurDate}
    />
    <ShoppingItem itemTitle={items[2].itmTitle}
     itemCost={items[2].itmCost}
     itemPurchaseDate={items[2].itmPurDate} 
     />  */}
     </Card>
);
}
export default Items;