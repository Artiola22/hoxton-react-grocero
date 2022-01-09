import CartItem from "../CartItem.jsx/CartItem"

function Cart (props){
    return(
        <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
            {
                props.item.map( item => {
                    if (item.productInCart > 0 )
                    return 
       <CartItem />
    })
}
        </ul>
      </div>

    
    </main>
    )
}
export default  Cart