<div class="cart-item">
	<img src={image} alt={title} />
	<div>
		<h4>{title}</h4>
		<h5>${price}</h5>
		<button
			class="cart-btn remove-btn"
			on:click={() => {
				console.log('remove item');
			}}>remove</button
		>
	</div>
	<div>
		<button
			class="cart-btn amount-btn"
			on:click={() => {
				console.log('increase item');
			}}
		>
			<i class="fas fa-chevron-up" />
		</button>
		<p class="item-amount">{amount}</p>
		<button
			class="cart-btn amount-btn"
			on:click={() => {
				console.log('decrease item');
			}}
		>
			<i class="fas fa-chevron-down" />
		</button>
	</div>
</div>

<script>
	let amount;
	let id;
	let image;
	let price;
	let title;

	export { amount, id, image, price, title };
</script>
