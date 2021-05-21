<h1>hello from products component</h1>
<!-- using $ on products will subscribe and unsubscribe when component is loaded and destroyed -->
<!-- with $ we do not have access to set, update and subscribe methods, but we have the objects on products -->
{#each $products as product}
	<h2>{product.title}</h2>
{/each}

<script>
	import products from '../../stores/defaultProducts';
</script>
