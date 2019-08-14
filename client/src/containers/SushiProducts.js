import { connect } from 'react-redux';
import Component from '../components/SushiProducts';
import { fetchProducts } from '../actions';

const mapDispatchToProps = dispatch => ({
		onFetchProducts: () => dispatch(fetchProducts()),
});

const mapStateToProps = (state) => {
	const { products } = state;
	return products;
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);