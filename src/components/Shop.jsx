import {useState, useEffect} from "react";
import {API_KEY, API_URL} from "../config"

import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart'
import {BasketList} from "./BasketList"
import {Alert} from './Alert'


function Shop() {
	const [goods, setGoods] = useState([]);
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState([])
	const [icon, setIcon] = useState('shopping_cart')
	const [isBasketShow, setBasketShow] = useState(false)
	const [alertName, setAlertName] = useState('');

	//"remove_shopping_cart"

	const handleBasketShow = () => {
		setBasketShow(!isBasketShow);
		!isBasketShow ? setIcon('shopping_basket') : setIcon('shopping_cart')
		// console.log("Click", icon)
	}

	const removeGoodFromOrder = (itemId) => {
		const newOrder = order.filter(el => el.id !== itemId)
		const changeItem = order.find(el => {return (el.id === itemId)})
		setOrder(newOrder);
		setIcon('remove_shopping_cart')
		setAlertName(`${changeItem.name} remove from `)
	}

	const addQuantity = (itemId) => {
		const changeItem = order.find(el => {return (el.id === itemId)})
		setAlertName(`${changeItem.name} add to `)
		// console.log(changeItem)

		const changedOrder = order.map((orderItem) => {
			if (orderItem.id === itemId) {
				return {
					...orderItem,
					quantity: orderItem.quantity + 1,
				}
			} else {
				return orderItem
			}
		})
		setOrder(changedOrder);
	}

	const removeQuantity = (itemId) => {
		const changeItem = order.find(el => {return (el.id === itemId)})
		setAlertName(`${changeItem.name} remove from `)
		// console.log(changeItem)

		const changedOrder = order.map((orderItem) => {
			if (orderItem.id === itemId) {
				if (orderItem.quantity > 1) {
				return {
					...orderItem,
					quantity: orderItem.quantity - 1,
				}
				} else {
					return orderItem
				}
			} else {
				return orderItem
			}
		})
		setOrder(changedOrder);
	}

	const closeAlert = () => {
		setAlertName('')
	}

	const addGoodOrder = (item) => {
		setIcon("add_shopping_cart")

		const itemIndex = order.findIndex(
			(orderItem) => orderItem.id === item.id
		);

		if (itemIndex < 0) {
		const newItem = {
			...item,
			quantity: 1.
		}
			setOrder([...order, newItem])
			// console.log("Order ", order[0])
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else {
					return orderItem
				}
			})
			// console.log("New Order ", newOrder)
			setOrder(newOrder)
		}
		setAlertName( `${item.name} add to `)
	}

	useEffect(function getGoods() {
		fetch(API_URL, {
			headers: {
				'Authorization': API_KEY,
			},
		})
			.then(response => response.json())
			.then(data => {
				data.featured && setGoods(data.featured);
				setLoading(false);
			})
	}, [])


	return (<main className="container content">
		<Cart quantity={order.length} icon={icon} handleBasketShow={handleBasketShow}/>
		{ loading ? <Preloader/> : <GoodsList goods={goods}  addGoodOrder={addGoodOrder} /> }
		{
			isBasketShow && <BasketList
				order={order}
				handleBasketShow={handleBasketShow}
				removeGoodFromOrder={removeGoodFromOrder}
				addQuantity={addQuantity}
				removeQuantity={removeQuantity}
			/>
		}
		{
			alertName && <Alert name={alertName} closeAlert={closeAlert}/>
		}

	</main>);
}

export {Shop}