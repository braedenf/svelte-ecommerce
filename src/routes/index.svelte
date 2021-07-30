<script>
    import products from '$lib/products';
    import Product from '$lib/Product.svelte';
</script>


<h1 class="font-headline font-semibold text-4xl text-gray-800 mb-3">
    Latest Products
</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {#each products as product}
        <Product {product}/>
    {/each}
</div>