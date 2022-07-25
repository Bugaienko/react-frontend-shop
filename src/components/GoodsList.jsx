import {GoodsItem} from './GoodsItem'

function GoodsList(props) {
	const { goods = [], addGoodOrder = Function.prototype,  } = props

	if (!goods.length) {
		return <h3>Nothing here</h3>
	}

	return <div className="goods">
		{
			goods.map(item => (
				<GoodsItem key={item.id} {...item} addGoodOrder={addGoodOrder}/>
			))
		}
	</div>

}

export {GoodsList}