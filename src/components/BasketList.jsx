import {BasketItem} from "./BasketItem"

function BasketList(props) {
	const {
		order = [],
		handleBasketShow = Function.prototype,
		removeGoodFromOrder = Function.prototype,
		addQuantity = Function.prototype,
		removeQuantity = Function.prototype
	} = props;

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)

	return <ul className = "collection basket-list">
		<li className = "collection-header"><span>Basket</span></li>
		{
			order.length ? order.map(item => (
				<BasketItem
					key={item.id} {...item}
					removeGoodFromOrder={removeGoodFromOrder}
					addQuantity={addQuantity}
					removeQuantity={removeQuantity}
				/>
			)) : (
				<li className = "collection-item avatar">
					<i className = "material-icons circle">child_friendly</i>
					<span className = "title">Empty</span>
					<p>
						No goods in basket
					</p>

				</li>
			)
		}

		<li className = "collection-header foot">
			<span>Total sum: {totalPrice} €</span>
				<button className="btn-buy" onClick={() => alert('Thanks for your order. \nThis is a test application - you cannot pay for your purchases.')}>
					Checkout
				</button>
		</li>
		<i className = "material-icons basket-btn-close" onClick={handleBasketShow}>close</i>
	</ul>
}

export  {BasketList};

