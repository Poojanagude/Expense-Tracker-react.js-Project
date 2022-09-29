import { useState } from "react";
import "./ItemForm.css";
const ItemForm=(props)=>
{
    const[enteredTitle,setEnteredTitle]=useState("");
    const[enteredCost,setEnteredCost]=useState("");
    const[enteredDate,setEnteredDate]=useState("");
    const titleChangeHandler=(event)=>
    {
        setEnteredTitle(event.target.value);
    }
    const costChangeHandler=(event)=>
    {
        setEnteredCost(event.target.value);
    }
    const dateChangeHandler=(event)=>
    {
        setEnteredDate(event.target.value);
    }
    const saveItemHandler=(event)=>
    {
        event.preventDefault();
        const itemData={
            itmTitle:enteredTitle,
            itmCost:enteredCost,
            itmPurDate:new Date(enteredDate),
        }
        props.onSaveItemData(itemData);
       // console.log(itemData);
        setEnteredTitle("");
        setEnteredCost("");
        setEnteredDate("");
    }
    // const btnClickHandler=()=>
    // {
    //     // console.log(enteredTitle);
    //     // console.log(enteredCost);
    //     // console.log(enteredDate);
    // }
    const cancelHandler=()=>
    {
        props.onCancel();
    }
    return(
        <form onSubmit={saveItemHandler}>
        <div className="new-item_controls">
            <div className="new-item_control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}
                value={enteredTitle}></input>
           </div>
           <div className="new-item_control">
                <label>Cost</label>
     <input type="number" min="10" max="10000000" onChange={costChangeHandler}
      value={enteredCost}/>

            </div>
            <div className="new-item_control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2022-12-31"
                 onChange={dateChangeHandler}  value={enteredDate}/>
              </div>
            
             <div className="new-item_actions">
         <button> Add Item</button>
         <button type="button"
         onClick={cancelHandler}>Cancel</button>
             </div>
             </div>
             </form>
)
}
export default ItemForm;