import "./PurchaseDate.css";
const PurchaseDate=(props)=>
{
    const day=props.itemPurchaseDate.getDate();
    const year=props.itemPurchaseDate.getFullYear();
    const month=props.itemPurchaseDate.toLocaleString("en-US",{month:"long"});
return(
    <div className="Purchase-date">
         <div className="Purchase-date_day">{day}</div>
              <div  className="Purchase-date_month">{month}</div>
              <div  className="Purchase-date_year">{year}</div>
    </div>
)
}
export default PurchaseDate;