import { writable, derived } from 'svelte/store';
import localCart from '../localCart';

const storeCart = writable([...localCart]);

export const storeCartTotal = derived(storeCart, ($storeCart) => {
	let total = $storeCart.reduce((acc, current) => {
		return (acc += current.amount * current.price);
	}, 0);

	return total.toFixed(2);
});

export default storeCart;
