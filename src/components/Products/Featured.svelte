<!-- using $ on products will subscribe and unsubscribe when component is loaded and destroyed -->
<!-- with $ we do not have access to set, update and subscribe methods, but we have the objects on products -->

{#if featured.length}
	<section class="section">
		<h2 class="section-title">{title}</h2>
		<div class="products-center">
			{#each featured as product (product.id)}
				<Product {product} />
			{/each}
		</div>
	</section>
{:else}
	<Loading />
{/if}

<script>
	import products from '../../stores/defaultProducts';
	import Product from './Product.svelte';
	import Loading from '../Loading.svelte';

	$: featured = $products.filter((item) => item.featured === true);

	let title = '';

	export { title };
</script>
