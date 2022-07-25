function BasketItem(props) {
	const {
		id,
		name,
		price,
		icon,
		quantity,
		removeGoodFromOrder = Function.prototype,
		addQuantity = Function.prototype,
		removeQuantity = Function.prototype,
	} = props

	return <li className = "collection-item avatar" id={id}>
		<img src = {icon} alt = "" className = "circle"/>
		<span className = "title">{name}</span>
		<p>
			{name} x  <button className="btn-item-change" onClick={() => {removeQuantity(id)}}><i className = "material-icons btn-basket-quantity">remove</i></button> {quantity} <button className="btn-item-change" onClick={() => {addQuantity(id)}}><i className = "material-icons btn-basket-quantity">add</i></button>  = {price * quantity} €
		</p>
		<span className = "secondary-content" onClick={() => removeGoodFromOrder(id)}><i className = "material-icons btn-item-close">close</i></span>
	</li>
}
export {BasketItem}