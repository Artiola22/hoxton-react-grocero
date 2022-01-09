function ItemsList (props){
    return (
        <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
          {
props.items.map( item => (
      <li>
        <div className="store--item-icon">
         <img src={"./assets/icons/001-beetroot.svg"} alt="beetroot" />
         </div>
        <button onClick={() => props.addToCart (item)}>Add to cart</button>
      </li>)

)
          }
      </ul>
    </header>
    )
}
export default ItemsList