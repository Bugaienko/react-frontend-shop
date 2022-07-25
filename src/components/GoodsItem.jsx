function GoodsItem(props) {
	const {
		id,
		name,
		description,
		price,
		full_background,
		icon,
		addGoodOrder = Function.prototype
	} = props;

	return <div className = "card" >
		<div className = "card-image waves-effect waves-block waves-light">
			<img className = "activator" src={full_background} alt={name}/>
		</div>
		<div className = "card-content">
			<span className = "card-title activator grey-text text-darken-4">{name}<i
				className = "material-icons right">more_vert</i></span>
			<p><a href = "!#"><img className = "icon-image" src={icon} alt={name}/></a>{description}</p>
		</div>
		<div className = "card-reveal">
			<span className = "card-title grey-text text-darken-4">Card Title<i
				className = "material-icons right">close</i></span>
			<p>{description}</p>
		</div>
		<div className = "card-action">
			<button
				className='btn'
				onClick={() => addGoodOrder({
					id,
					name,
					price,
					icon,
				})}
			>
				Buy
			</button>
			<span className='card-price right'>{price} €</span>
		</div>
	</div>

}

export {GoodsItem}

// <li className = "collection-item avatar">
// 	<img src = "images/yuna.jpg" alt = "" className = "circle"/>
// 	<span className = "title">Title</span>
// 	<p>First Line <br/>
// 		Second Line
// 	</p>
// 	<a href = "!#" className = "secondary-content"><i className = "material-icons">grade</i></a>
// </li>
// <li className = "collection-item avatar">
// 	<i className = "material-icons circle">folder</i>
// 	<span className = "title">Title</span>
// 	<p>First Line <br/>
// 		Second Line
// 	</p>
// 	<a href = "#!" className = "secondary-content"><i className = "material-icons">grade</i></a>
// </li>
// <li className = "collection-item avatar">
// 	<i className = "material-icons circle green">insert_chart</i>
// 	<span className = "title">Title</span>
// 	<p>First Line <br/>
// 		Second Line
// 	</p>
// 	<a href = "#!" className = "secondary-content"><i className = "material-icons">grade</i></a>
// </li>
// <li className = "collection-item avatar">
// 	<i className = "material-icons circle red">play_arrow</i>
// 	<span className = "title">Title</span>
// 	<p>First Line <br/>
// 		Second Line
// 	</p>
// 	<a href = "#!" className = "secondary-content"><i className = "material-icons">grade</i></a>
// </li>