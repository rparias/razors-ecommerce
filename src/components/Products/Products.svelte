<h1>hello from products component</h1>
{#each localProducts as product}
	<h2>{product.title}</h2>
{/each}

<script>
	import { onMount } from 'svelte';
	import products from '../../stores/defaultProducts';

	let localProducts = [];

	onMount(() => {
		products.subscribe((value) => {
			localProducts = value;
		});
	});
</script>
