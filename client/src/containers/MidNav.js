import { connect } from 'react-redux';
import React from 'react';
import logo from '../images/logo.png';

const MidNav = () => {
	return (
		<div className='midnav'>
			<div>
				<ul className='midnav__ul'>
					<li className='midnav__li'><a className='midnav__a midnav__a_home' href='#home'><img src={logo} alt='japanito' /></a></li>
       		<li className='midnav__li'><a className='midnav__a' href='#home'>Главная</a></li>
       		<li className='midnav__li'><a className='midnav__a' href='#menu'>Меню</a></li>
       		<li className='midnav__li'><a className='midnav__a' href='#news'>Новости</a></li>
       		<li className='midnav__li'><a className='midnav__a' href='#offers'>Акции</a></li>
       		<li className='midnav__li'><a className='midnav__a' href='#restaurants'>Рестораны</a></li>
       		<li className='midnav__li'><a className='midnav__a' href='#area'>География доставки</a></li>
       	</ul>
      </div>
      <div>
       	<div className='midnav__text-block'>
       		Бесплатная доставка при заказе<span className='midnav__text-block_red'> от 800 руб.</span>
       		<div className='midnav__button-position'>
       			<button className='midnav__button'>Перейти к заказу</button>
       		</div>
       		<div className='midnav__img-sushi'></div>
       	</div>
      </div>
    </div>
	);
}

export default connect()(MidNav);