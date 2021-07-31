<script>
    import Rating from '$lib/Rating.svelte';

    export let product;
</script>

<div class="mx-6 sm:mx-2 my-3 p-3 rounded border-2 flex flex-col space-y-3 shadow-md">
    <a href="/product/{product._id - 1}">
        <img src={product.image} alt={`Product: ${product.name}`}>
    </a>
    <a href="/product/{product._id}">
        <h3 class="font-general font-semibold text-sm hover:underline">{product.name}</h3>
    </a>
    <Rating rating={product.rating} text={`${product.numReviews} reviews`}/>
    
    <h3 class="font-general font-bold text-2xl text-gray-800">${product.price}</h3>
</div>
