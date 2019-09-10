import React from 'react';
import classNames from 'classnames';
import logo from '../images/logo.png';

export default class Card extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	barsClicked: false,
    };
  }

  handleClick = (e) => {
  	const { barsClicked } = this.state;
  	this.setState({ barsClicked: !barsClicked });
  }

  render() {
  	const { barsClicked } = this.state;
  	const midnavToggleMenu = classNames({
      'midnav__toggle-menu_none': !barsClicked,
      'midnav_toggle-menu_active': barsClicked,
  	});
  	return (
		<div className='midnav'>
      <div className={midnavToggleMenu}>
        <div className='midnav__nav-block'><a className='midnav__link' href='#home'>Главная</a></div>
        <div className='midnav__nav-block'><a className='midnav__link' href='#menu'>Меню</a></div>
        <div className='midnav__nav-block'><a className='midnav__link' href='#news'>Новости</a></div>
        <div className='midnav__nav-block'><a className='midnav__link' href='#offers'>Акции</a></div>
        <div className='midnav__nav-block'><a className='midnav__link' href='#restaurants'>Рестораны</a></div>
        <div className='midnav__nav-block'><a className='midnav__link' href='#area'>География доставки</a></div>
      </div>
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
            <li className='midnav__li'><a onClick={this.handleClick} className='midnav__link'><i className="fas fa-bars"></i></a></li>
          </ul>
        </div>
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
}