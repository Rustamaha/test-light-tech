import { connect } from 'react-redux';
import React from 'react';
import sushi from '../images/sushi.png';
import fish from '../images/fish.png';
import sushiMix from '../images/sushi-mix.png';
import noodles from '../images/noodles.png';
import soup from '../images/soup.png';

const Categories = () => {
	return (
		<div className='categories'>
			<ul className='categories__ul'>
				<li className='categories__li'><a className='categories__link' href='#sushi'><img className='categories__img' src={sushi} alt='sushi' /></a></li>
       	<li className='categories__li'><a className='categories__link' href='#rolls'><img className='categories__img' src={fish} alt='sushi' /></a></li>
       	<li className='categories__li'><a className='categories__link' href='#mix'><img className='categories__img' className='categories__img' src={sushiMix} alt='sushi-mix' /></a></li>
       	<li className='categories__li'><a className='categories__link' href='#noodles'><img className='categories__img' src={noodles} alt='noodles' /></a></li>
       	<li className='categories__li'><a className='categories__link' href='#soup'><img className='categories__img' src={soup} alt='soup' /></a></li>
       </ul>
    </div>
	);
}

export default connect()(Categories);