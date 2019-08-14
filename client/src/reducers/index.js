import { keyBy } from 'lodash';
import { combineReducers } from 'redux';

const products = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_PRODUCTS_SUCCESS':
			const products = keyBy(action.products, '_id')
			return { products };
		default:
			return state;
	}
};

export default combineReducers({
	products,
});