function Cart(props) {
	const {quantity = 0, icon = 'shopping_cart', handleBasketShow = Function.prototype} = props
	return <div className='cart green darken-4 white-text' onClick={handleBasketShow}>
		<i className="material-icons">{icon}</i>
		{quantity ? <span className='cart-quantity'>{quantity}</span> : null }
	</div>
}

export {Cart}