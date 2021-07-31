<script>
    import { icon, library } from '@fortawesome/fontawesome-svg-core';
    import { faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from 'fontawesome-svelte';

    export let rating, text;
</script>

<div>
    <span>
            {#if rating == 5}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
            {/if}
            {#if rating == 4.5}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStarHalfAlt}/> </i>
            {/if}
            {#if rating == 4}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
            {/if}
            {#if rating == 3.5}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStarHalfAlt}/> </i>
            {/if}
            {#if rating == 3}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
            {/if}
            {#if rating == 2.5}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStarHalfAlt}/> </i>
            {/if}
            {#if rating == 2}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
            {/if}
            {#if rating == 1.5}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStarHalfAlt}/> </i>
            {/if}
            {#if rating == 1}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStar}/> </i>
            {/if}
            {#if rating == 0.5}
                <i class="text-yellow-300"><FontAwesomeIcon icon={faStarHalfAlt}/> </i>
            {/if}
    </span>
    <span class="ml-2">
        <i class="font-general text-sm text-gray-700">{text && text}</i>
    </span>
</div>