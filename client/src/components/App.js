import React from 'react';
import TopNav from '../containers/TopNav';
import MidNav from '../containers/MidNav';
import Categories from '../containers/Categories';
import SushiProducts from '../containers/SushiProducts';
import Footer from '../containers/Footer';

const App = () => (
	<div className='container'>
		<TopNav />
		<MidNav />
		<Categories />
		<SushiProducts />
		<Footer />
	</div>
);

export default App;