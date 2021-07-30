<script>
	import '../app.postcss';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>Welcome to Svelte Ecommerce</title>
</svelte:head>

<Header />
<main class="min-h-screen py-3 px-10">
	<slot />
</main>
<Footer />
