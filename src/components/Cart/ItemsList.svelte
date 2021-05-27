<section class="cart-items">
	<article>
		{#each $storeCart as cartItem, index (cartItem.id)}
			<div in:fly={{ delay: (index + 1) * 500, x: 100 }} on:fly={{ x: -100 }} animate:flip>
				<Item {...cartItem} />
			</div>
		{:else}
			<h2 class="empty-cart">is currently empty</h2>
		{/each}
	</article>
	<h3 class="cart-total">total: ${$storeCartTotal}</h3>
</section>

<script>
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { afterUpdate } from 'svelte';
	import Item from './Item.svelte';
	import storeCart, { storeCartTotal, setStorageCart } from '../../stores/cart';
	import cart from '../../stores/cart';

	afterUpdate(() => {
		setStorageCart($cart);
	});
</script>
