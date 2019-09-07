import { connect } from 'react-redux';
import React from 'react';
import logo from '../images/logo.png';

const MidNav = () => {
	return (
		<div className='midnav'>
      <div className='midnav__main-img'>
			<div className='midnav__navbar'>
				<ul className='midnav__ul midnav__ul_left'>
					<li className='midnav__li'><a className='midnav__link midnav__link_home' href='#home'><img className='midnav__logo' src={logo} alt='japanito' /></a></li>
       	</ul>
        <ul className='midnav__ul midnav__ul_right'>
          <li className='midnav__li'><a className='midnav__link' href='#home'>Главная</a></li>
       		<li className='midnav__li'><a className='midnav__link' href='#menu'>Меню</a></li>
       		<li className='midnav__li'><a className='midnav__link' href='#news'>Новости</a></li>
       		<li className='midnav__li'><a className='midnav__link' href='#offers'>Акции</a></li>
       		<li className='midnav__li'><a className='midnav__link' href='#restaurants'>Рестораны</a></li>
       		<li className='midnav__li'><a className='midnav__link' href='#area'>География доставки</a></li>
       	</ul>
        <ul className='midnav__ul midnav__ul_bars'>
          <i className="fas fa-bars"></i>
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
    </div>
	);
}

export default connect()(MidNav);