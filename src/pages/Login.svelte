<section class="form">
	<h2 class="section-title">
		{#if isMember}
			sign in
		{:else}
			register
		{/if}
	</h2>
	<form class="login-form" on:submit|preventDefault={handleSubmit}>
		<div class="form-control">
			<label for="email">email</label>
			<input id="email" type="email" bind:value={email} />
		</div>
		<div class="form-control">
			<label for="password">password</label>
			<input id="password" type="password" bind:value={password} />
		</div>
		{#if !isMember}
			<div class="form-control">
				<label for="username">username</label>
				<input id="username" type="text" bind:value={username} />
			</div>
		{/if}
		{#if isEmpty}
			<p class="form-empty">please fill out all form fields</p>
		{/if}
		<button
			type="submit"
			class="btn btn-block btn-primary"
			disabled={isEmpty}
			class:disabled={isEmpty}>submit</button
		>
		{#if isMember}
			<p class="register-link">
				need to register?
				<button type="button" on:click={toggleMember}>click here</button>
			</p>
		{:else}
			<p class="register-link">
				already a member?
				<button type="button" on:click={toggleMember}>click here</button>
			</p>
		{/if}
	</form>
</section>

<script>
	import loginUser from '../strapi/loginUser';
	import registerUser from '../strapi/registerUser';

	let email = '';
	let password = '';
	let username = 'default username';
	let isMember = true;

	$: isEmpty = !email || !password || !username;

	function toggleMember() {
		isMember = !isMember;
		username = !isMember ? '' : 'default username';
	}

	async function handleSubmit() {
		let user;
		if (isMember) {
			loginUser();
		} else {
			user = await registerUser({ email, password, username });
		}
		console.log(user);
	}
</script>
