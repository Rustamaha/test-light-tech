import React from 'react';
import Card from '../containers/Card';

export default class Products extends React.Component {
	constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onFetchProducts } = this.props;
    onFetchProducts();
  }

  /*componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      const { onFetchProducts } = this.props;
      onFetchProducts();
    }
  }*/

	renderSushi() {
		const { products } = this.props;
		if (products) {
			const sushiList = Object.keys(products)
				.filter(id => products[id].category === 'sushi')
				.map(id => {
					const idParams = products[id];
					return (
						<Card key={id} {...idParams} />
					)});
			return sushiList;
		}
	}

	renderRoll() {
		const { products } = this.props;
		if (products) {
			const rollList = Object.keys(products)
				.filter(id => products[id].category === 'roll')
				.map(id => {
					const idParams = products[id];
					return (
						<Card key={id} {...idParams} />
					)});
			return rollList;
		}
	}

	render() {
		return (
			<div className='products'>
				<div className='products__sushi'>
					<div className='products__sushi-header'>
						<div className='products__sushi-name'><div className='products__sushi-name products__sushi-name_border'></div>Суши</div>
						<div className='products__filter'>Фильтр<span className='products__plus'>+</span></div>
					</div>
					<div className='products__list'>
						{this.renderSushi()}
					</div>
				</div>
				<div className='products__roll'>
					<div className='products__roll-header'>
						<div className='products__roll-name'><div className='products__sushi-name products__sushi-name_border'></div>Роллы</div>
						<div className='products__filter'>Фильтр<span className='products__plus'>+</span></div>
					</div>
					<div className='products__list'>
						{this.renderRoll()}
					</div>
				</div>
			</div>
		);
	}
}