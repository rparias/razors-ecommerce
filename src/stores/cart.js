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
// global functions
export const removeItem = (id) => {
	storeCart.update((storeValue) => {
		return remove(id, storeValue);
	});
};
// localStorage

export default storeCart;
