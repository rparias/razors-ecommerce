<div class="btn-cart-container">
	<button
		class="btn-cart-toggle"
		on:click={() => {
			globalStore.toggleItem('cart', true);
		}}
	>
		<i class="fas fa-cart-plus" />
	</button>
	<span class="btn-cart-items">{totalItems}</span>
</div>

<script>
	import globalStore from '../../stores/globalStore';
	import cartStore from '../../stores/cart';

	$: totalItems = $cartStore.reduce((acc, current) => {
		return (acc += current.amount);
	}, 0);
</script>
