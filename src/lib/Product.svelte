<script>
    import Rating from '$lib/Rating.svelte';

    export let product;
</script>

<div class="my-3 p-3 rounded border-2 flex flex-col space-y-3">
    <a href="{`/product/${product.id}`}">
        <img src={product.image} alt="Image of product">
    </a>
    <a href="/">
        <h3 class="font-general font-semibold text-sm">{product.name}</h3>
    </a>
    <Rating rating={product.rating} text={`${product.numReviews} reviews`}/>
    
    <h3 class="font-general font-bold text-2xl text-gray-800">${product.price}</h3>
</div>
