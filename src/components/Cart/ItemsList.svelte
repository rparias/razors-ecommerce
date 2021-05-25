<section class="cart-items">
	<article>
		{#each $cartStore as cartItem, index (cartItem.id)}
			<Item {...cartItem} />
		{:else}
			<h2 class="empty-cart">is currently empty</h2>
		{/each}
	</article>
</section>

<script>
	import Item from './Item.svelte';
	import cartStore from '../../stores/cart';
</script>
