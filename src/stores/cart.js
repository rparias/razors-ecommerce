import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

// cart
const storeCart = writable([...localCart]);

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
// localStorage

export default storeCart;
