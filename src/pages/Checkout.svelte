{#if $storeCartTotal > 0}
	<section class="form">
		<h2 class="section-title">checkout</h2>
		<form class="checkout-form" on:submit|preventDefault={handleSubmit}>
			<h3>order total: ${$storeCartTotal}</h3>
			<div class="form-control">
				<label for="name">your name</label>
				<input type="text" id="name" bind:value={name} />
				<!-- stripe stuff -->
				<div class="stripe-input">
					<label for="card-element">Credit or Debit Card</label>
					<p class="stripe-info">
						Test using this credit card:
						<span>4242 4242 4242 4242</span>
						<br />
						enter any 5 digits for the zip code
						<br />
						enter any 3 digits for the CVC
					</p>
					<div id="card-element" bind:this={cardElement}>
						<!-- stripe -->
					</div>
					<div id="card-errors" bind:this={cardErrors} role="alert" />
				</div>
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

	// stripe vars
	let card;
	let cardElement;
	let cardErrors;
	let elements;
	let stripe;

	$: isEmpty = !name;

	onMount(() => {
		if (!$storeUser.jwt) {
			navigate('/');
			return;
		}
		if ($storeCartTotal > 0) {
			setupStripe();
		}
	});

	function setupStripe() {
		/* global Stripe */
		stripe = Stripe(
			'pk_test_51IwHigFe2EQrzciohDP2LUIG4mgLNGxXW5QNIaEkKXWigj8fUWTIUqHaC2AjEhMMzXUajVLscriW1ph1XRNVgjj200XskSVTfi'
		);
		elements = stripe.elements();
		card = elements.create('card');
		card.mount(cardElement);
		card.addEventListener('change', function (event) {
			if (event.error) {
				cardErrors.textContent = event.error.message;
			} else {
				cardErrors.textContent = '';
			}
		});
	}

	async function handleSubmit() {
		let response = await stripe.createToken(card).catch((error) => console.error(error));
		const { token } = response;
		if (token) {
			// token.id
			// submit order
		} else {
			// error on token
		}
	}
</script>
