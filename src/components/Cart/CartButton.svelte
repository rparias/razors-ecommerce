<div class="btn-cart-container">
	<button
		class="btn-cart-toggle"
		on:click={() => {
			console.log('hello');
			globalStore.toggleItem('cart', true);
		}}
	>
		<i class="fas fa-cart-plus" />
	</button>
	<span class="btn-cart-items">10</span>
</div>

<script>
	import globalStore from '../../stores/globalStore';
</script>
