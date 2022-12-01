import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
import { getProductsSuccess } from '../slices/allProducts';

function* workGetProductsFetch() {
    const products = yield call(() => axios.get('https://fakestoreapi.com/products'));
    const formattedProducts = yield products.data;
    const formattedProductsShortened = formattedProducts.slice(0, 10);
    yield put(getProductsSuccess(formattedProductsShortened));
}

function* productsSaga() {
    yield takeEvery('products/getProductsFetch', workGetProductsFetch);
}

export default productsSaga;