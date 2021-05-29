{#if $storeCartTotal > 0}
	<section class="form">
		<h2 class="section-title">checkout</h2>
		<form class="checkout-form" on:submit|preventDefault={handleSubmit}>
			<h3>order total: ${$storeCartTotal}</h3>
			<div class="form-control">
				<label for="name">your name</label>
				<input type="text" id="name" bind:value={name} />
				<!-- stripe stuff -->
				<!-- end of stripe stuff -->
				{#if isEmpty}
					<p class="form-empty">please fill out name field</p>
				{/if}
				<button
					type="submit"
					class="btn btn-block btn-primary"
					disabled={isEmpty}
					class:disabled={isEmpty}>submit</button
				>
			</div>
		</form>
	</section>
{:else}
	<div class="checkout-empty">
		<h2>your cart is empty</h2>
		<a href="/products" use:link class="btn btn-primary">fill it</a>
	</div>
{/if}

<script>
	import { onMount } from 'svelte';
	import { navigate, link } from 'svelte-routing';
	import { storeCartTotal } from '../stores/cart';
	import storeUser from '../stores/storeUser';

	let name = '';

	$: isEmpty = !name;

	onMount(() => {
		if (!$storeUser.jwt) {
			navigate('/');
		}
	});

	function handleSubmit() {
		console.log('form submitted');
	}
</script>
