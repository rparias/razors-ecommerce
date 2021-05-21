<!-- using $ on products will subscribe and unsubscribe when component is loaded and destroyed -->
<!-- with $ we do not have access to set, update and subscribe methods, but we have the objects on products -->
<section class="section">
	<h2 class="section-title">{title}</h2>
	<div class="products-center">
		{#each $products as product (product.id)}
			<Product {product} />
		{:else}
			<Loading />
		{/each}
	</div>
</section>

<script>
	import products from '../../stores/defaultProducts';
	import Product from './Product.svelte';
	import Loading from '../Loading.svelte';

	let title = '';

	export { title };
</script>
