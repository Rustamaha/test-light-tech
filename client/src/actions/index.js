export const fetchProductsRequest = () => ({ type: 'FETCH_PRODUCTS_REQUEST' });
export const fetchProductsSuccess = (values) => {
	console.log(values)
	return ({
	type: 'FETCH_PRODUCTS_SUCCESS',
	products: values,
});
}

export const fetchProductsFailure = () => ({ type: 'FETCH_PRODUCTS_FAILURE' });

export const fetchProducts = () => dispatch => {
	dispatch(fetchProductsRequest());
	return fetch('/api/products')
		.then(res => res.json())
		.then(data => {
			dispatch(fetchProductsSuccess(data));
		});
};