import React from 'react';
import classNames from 'classnames';

export default class Card extends React.Component {
	constructor(props) {
    super(props);
  }

  render() {
  	const { id, weight, ribbon, imgSrc, pictureUri, name, price } = this.props;
  	const words = name.split(' ');
  	const firstWords = words.filter((word, ind) => ind === 0 || word === 'ролл' || word === 'хамачи');
  	const restWords = words.filter(word => !firstWords.includes(word)).join(' ');
  	console.log(words, firstWords, restWords);
  	const cardRibbon = classNames({
  		'card__ribbon': true,
  		'card__ribbon_green': ribbon === 'Veg',
  		'card__ribbon_yellow': ribbon === 'Hit',
  	});
		return (
			<div key={id} className='card'>
				<div className='card__header'>
					<span className='card__weight'>{weight} г.</span>
					<span className={cardRibbon}>{ribbon}</span>
				</div>
				<div className='card__content'>
					<img className='card__img' src={imgSrc} alt={pictureUri} />
					<span>{firstWords.join(' ')}</span>
					<span className='card__last-name'>{restWords}</span>
				</div>
				<div className='card__footer'>
					<span className='card__price'>{price} <i className='fas fa-ruble-sign'></i></span>
					<span className='card__counter'>- 0 +</span>
				</div>
			</div>
		);
	}
}