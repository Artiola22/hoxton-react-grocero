function CartItem (props) {
    return (
        <li>
        <img
         className="cart--item-icon"
         src="assets/icons/001-beetroot.svg"
         alt="beetroot"
         />
   <p>beetroot</p>
   <button className="quantity-btn remove-btn center" onClick={()=> props.decreaseQuantity(props.item)}>-</button>
    <span className="quantity-text center">{props.item.productInCart}</span>
  <button className="quantity-btn add-btn center" onClick={() => props.increaseQuantity(props.item)}>+</button>
       </li>
    )
}
export default CartItem