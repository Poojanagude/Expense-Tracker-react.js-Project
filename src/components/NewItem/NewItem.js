import { useState } from "react";
import ItemForm from "./ItemForm";
import "./NewItem.css";
const NewItem=(props)=>
{
    const [isEditing,setIsEditing]=useState(false);
    const setEditingHandler=()=>
    {
        setIsEditing(true);
    }
    const cancelEditingHandler=()=>
    {
        setIsEditing(false);
    }
    const saveItemDataHandler=(itemData)=>
    {
        const item={...itemData,id:Math.random()};
        //console.log(item);
        props.onAddItem(item);
    }
 return(
    <div className="new-item">
        {!isEditing && <button onClick={setEditingHandler}>Add Shopping item</button>
 }
{isEditing &&(<ItemForm 
onCancel={cancelEditingHandler}
onSaveItemData={saveItemDataHandler}
></ItemForm>)}
    </div>
 )
}
export default NewItem;