<script context="module">
    import products from '$lib/products';
    import BackButton from '$lib/buttons/BackButton.svelte';

    export async function load({ page }) {

        const product = products[page.params.productScreen];

        return {
            props: {
                product
            }
        }
    }
</script>

<script>
    import Rating from '$lib/Rating.svelte'; 
    export let product;
</script>

<div class="mt-6">
    <BackButton path={'/'}/>

    <div class="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:space-x-6 lg:mx-32 xl:mx-40">
        <img src={product.image} alt={product.name}>
        <div class="flex flex-col space-y-4 sm:space-y-8 lg:space-y-20">
            <div class="flex flex-col space-y-2">
                <h2 class="font-general text-2xl lg:text-4xl">{product.name}</h2>
                <Rating rating={product.rating} text="{product.numReviews} reviews"/>
            </div>
            <div class="flex flex-col space-y-6">
                <span class="flex space-x-3 items-center">
                    <h3 class="font-general text-lg font-semibold text-gray-800 lg:text-2xl">Price: ${product.price}</h3>
                    <i class="font-general text-sm">
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </i>
                </span>
                <p class="font-general">{product.description}</p>
            </div>
            {#if product.countInStock <= 0}
                <button class="w-44 rounded-full shadow-lg py-3 font-general bg-gray-300 text-gray-50 uppercase cursor-auto">
                    Add to Cart
                </button>
            {:else}
                <button class="w-44 rounded-full shadow-lg transform hover:-translate-y-0.5 transition duration-100 py-3 font-general text-gray-50 bg-gray-800 hover:bg-gray-500 uppercase">
                    Add to Cart
                </button>
            {/if}
        </div>
    </div>
</div>

