import React from 'react';

export default class TopNav extends React.Component {
	render() {
		return (
			<div className='topnav'>
				<ul className='topnav__ul row'>
					<li className='topnav__li'><a className='topnav__a topnav__a_active' href='#ru'>RU</a></li>
        	<li className='topnav__li'><a className='topnav__a' href='#eng'>ENG</a></li>
        	<li className='topnav__li'><a className='topnav__a' href='#city'>Санкт-Петербург</a></li>
        	<li className='topnav__li'><a className='topnav__a topnav__a_contacts' href='#contacts'><i className="fas fa-phone topnav__phone"></i> 8-800-900-500-5</a></li>
        	<li className='topnav__li'><a className='topnav__a' href='#user'>Александр <i className="fas fa-user-alt topnav__user"></i></a></li>
        	<li className='topnav__li'><a className='topnav__a topnav__active-basket' href='#purchases'>2500 <i className="fas fa-ruble-sign"></i> <i className="fas fa-shopping-bag"></i></a></li>
        </ul>
      </div>
		);
	}
}