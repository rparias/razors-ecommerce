<section class="cart-items">
	<article>
		{#each $cartStore as cartItem, index (cartItem.id)}
			<div in:fly={{ delay: (index + 1) * 500, x: 100 }} on:fly={{ x: -100 }} animate:flip>
				<Item {...cartItem} />
			</div>
		{:else}
			<h2 class="empty-cart">is currently empty</h2>
		{/each}
	</article>
</section>

<script>
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Item from './Item.svelte';
	import cartStore from '../../stores/cart';
</script>
