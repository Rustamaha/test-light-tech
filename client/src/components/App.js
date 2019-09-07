import React from 'react';
import TopNav from '../containers/TopNav';
import MidNav from '../containers/MidNav';
import Categories from '../containers/Categories';
import Products from '../containers/Products';
import Footer from '../containers/Footer';

const App = () => (
	<div className='container'>
		<TopNav />
		<MidNav />
		<Categories />
		<Products />
		<Footer />
	</div>
);

export default App;