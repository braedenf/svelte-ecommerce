<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';
    
    library.add(faShoppingCart, faUser);
</script>
    
<header class="px-10 py-4 bg-gray-700 shadow-md">
    <nav class="flex justify-between items-center">
        <a class="text-white font-headline font-bold text-xl tracking-wider" href="/">Svelte Ecommerce</a>
        <ul class="flex space-x-6 text-gray-400 uppercase text-xs font-general font-bold">
            <li>
                <a class="hover:text-gray-200" href="/cart">
                    <div class="flex items-center space-x-2">
                        <p>Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </div>
                </a>
            </li>
            <li>
                <a class="hover:text-gray-200" href="/login">
                    <div class="flex items-center space-x-2">
                        <p>Sign In</p>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </a>
            </li>
        </ul>
    </nav>
</header>
