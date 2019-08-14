import { connect } from 'react-redux';
import Component from '../components/TopNav';
import { fetchProducts } from '../actions';

const mapDispatchToProps = dispatch => {
	return {
		onFetchProducts: () => dispatch(fetchProducts()),
	};
};

export default connect(null, mapDispatchToProps)(Component);