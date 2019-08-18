import React from 'react';

export default class TopNav extends React.Component {
	render() {
		return (
			<div className='topnav'>
				<ul className='topnav__ul'>
					<li className='topnav__li'><a className='topnav__link' href='#ru'>RU</a></li>
        	<li className='topnav__li'><a className='topnav__link' href='#eng'>ENG</a></li>
        	<li className='topnav__li'><a className='topnav__link' href='#city'>Санкт-Петербург</a></li>
        </ul>
        <ul className='topnav__ul topnav__ul_right'>
        	<li className='topnav__li'><a className='topnav__link' href='#contacts'><i className="fas fa-phone topnav__phone"></i> 8-800-900-500-5</a></li>
        	<li className='topnav__li'><a className='topnav__link' href='#user'>Александр <i className="fas fa-user-alt topnav__user"></i></a></li>
        	<li className='topnav__li'><a className='topnav__link topnav__link_basket' href='#purchases'>2500 <i className="fas fa-ruble-sign"></i> <i className="fas fa-shopping-bag"></i></a></li>
        </ul>
      </div>
		);
	}
}