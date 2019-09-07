import { connect } from 'react-redux';
import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__row footer__row_contacts'>
				<div className='footer__cell footer__cell_logo'><a className='footer__link footer__link_home' href='#home'><span className='footer__logo'></span></a></div>
       	<div className='footer__cell footer__cell_phone'><a className='footer__link' href='#phone'><i className='fas fa-phone footer__phone'></i> 8-800-900-500-5</a></div>
       	<div className='footer__row footer__row_social'>
       		<div className='footer__cell footer__cell_social'><a className='footer__link' href='#vk'><i className='fab fa-vk footer__vk'></i></a></div>
       		<div className='footer__cell footer__cell_social'><a className='footer__link' href='#fb'><i className='fab fa-facebook-f footer__fb'></i></a></div>
       		<div className='footer__cell footer__cell_social'><a className='footer__link' href='#instg'><i className='fab fa-instagram footer__instg'></i></a></div>
       	</div>
       	<div className='footer__cell footer__cell_year'><span>&copy;2019 Ресторан японской кухни Japanito</span></div>
      </div>
      <div className='footer__row footer__row_menu'>
      <div className='footer__menu footer__menu_left'>
        <div className='footer__cell'><a className='footer__link' href='#restaurants'>Рестораны</a></div>
       	<div className='footer__cell'><a className='footer__link' href='#offers'>Акции</a></div>
       	<div className='footer__cell'><a className='footer__link' href='#news'>Новости</a></div>
        <div className='footer__cell'><a className='footer__link' href='#delivery'>Доставка</a></div>
    		<div className='footer__cell'><a className='footer__link' href='#rental'>Аренда</a></div>
     	</div>
     	<div className='footer__menu footer__menu_right'>
       	<div className='footer__cell'><a className='footer__link' href='#franchise'>Франшиза</a></div>
       	<div className='footer__cell'><a className='footer__link' href='#jobs'>Вакансии</a></div>
       	<div className='footer__cell'><a className='footer__link' href='#offer'>Оферта</a></div>
        <div className='footer__cell'><a className='footer__link' href='#cooperation'>Сотрудничество</a></div>
     		<div className='footer__cell'><a className='footer__link' href='#contacts'>Контакты</a></div>
     	</div>
      </div>
      <div className='footer__row footer__row_buttons'>
      	<div className='footer__cell footer__cell_input'>
      		<input type='text' className='footer__input-search' />
      		<button className='footer__input-button'><i className='fas fa-search'></i></button>
      	</div>
       	<div className='footer__cell'>
          <button className='footer__review-button'>Отправить отзыв</button>
        </div>
        <div className='footer__cell footer__cell_stores'>
          <a className='footer__link' href='#appsore'><div className='footer__app-store'></div></a>
          <a className='footer__link' href='#googleplay'><div className='footer__google-play'></div></a>
        </div>
      </div>
		</div>
	);
}

export default connect()(Footer);