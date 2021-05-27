import { writable, derived } from 'svelte/store';
// import localCart from '../localCart';

// cart
const storeCart = writable(getLocalStorageCart());

// cart total
export const storeCartTotal = derived(storeCart, ($storeCart) => {
	let total = $storeCart.reduce((acc, current) => {
		return (acc += current.amount * current.price);
	}, 0);

	return total.toFixed(2);
});

// local functions
const remove = (id, items) => {
	return items.filter((item) => item.id !== id);
};

const toggleAmount = (id, items, action) => {
	return items.map((item) => {
		let newAmount;
		switch (action) {
			case 'INCREASE':
				newAmount = item.amount + 1;
				break;
			case 'DECREASE':
				newAmount = item.amount - 1;
				break;
			default:
				newAmount = item.amount;
		}
		return item.id === id ? { ...item, amount: newAmount } : { ...item };
	});
};

// global functions
export const removeItem = (id) => {
	storeCart.update((storeValue) => {
		return remove(id, storeValue);
	});
};

export const increaseAmount = (id) => {
	storeCart.update((storeValue) => {
		return toggleAmount(id, storeValue, 'INCREASE');
	});
};

export const decreaseAmount = (id) => {
	storeCart.update((storeValue) => {
		let item = storeValue.find((item) => item.id === id);
		let cart;
		if (item.amount === 1) {
			cart = removeItem(id);
		} else {
			cart = toggleAmount(id, storeValue, 'DECREASE');
		}
		return [...cart];
	});
};

export const addToCart = (product) => {
	storeCart.update((storeValue) => {
		const { id } = product;
		let item = storeValue.find((item) => item.id === id);
		let cart;
		if (item) {
			cart = toggleAmount(id, storeValue, 'INCREASE');
		} else {
			let newItem = { ...product, amount: 1 };
			cart = [...storeValue, newItem];
		}
		return cart;
	});
};

// localStorage
function getLocalStorageCart() {
	return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

export function setStorageCart(cartValues) {
	localStorage.setItem('cart', JSON.stringify(cartValues));
}
export default storeCart;
