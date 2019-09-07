import { keyBy } from 'lodash';
import { combineReducers } from 'redux';

const arrayBufferToBase64 = (buffer) => {
  let binary = '';
  let bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

const products = (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_PRODUCTS_SUCCESS':
			const transformData = action.products.map(({ img, _id, category, name, price, weight,	ribbon }) => {
				const { data } = img.data;
				const base64Flag = 'data:image/jpeg;base64,';
				const imgStr = arrayBufferToBase64(data);
				const imgSrc = `${base64Flag}${imgStr}`;
				return { imgSrc, _id, category, name, price, weight,	ribbon };
			});
			const products = keyBy(transformData, '_id');
			return { products };
		default:
			return state;
	}
};

export default combineReducers({
	products,
});