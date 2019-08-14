import React from 'react';
import { fetchProducts } from '../actions';

export default class SushiProducts extends React.Component {
	constructor(props) {
    super(props);
   }

	renderProducts() {
		const { products } = this.props;
		console.log(products)
		if (products) {
				return Object.keys(products)
					.filter(id => products[id].categories === 'sushi')
					.map(id => {
						const { weight, ribbon, price, name, pictureUri } = products[id];
						return (
					<div key={id} className='sushi__card'>
						<div>{weight}</div>
						<div>{ribbon}</div>
						<img alt={pictureUri} />
						<div>{price}</div>
					</div>
				)});
		} else {
			return;
		}
	}

	render() {
		console.log(this.props)
		return (
			<div className='sushi'>'Суши'
			{this.renderProducts()}
			</div>
		);
	}
}