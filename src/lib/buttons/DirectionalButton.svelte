<script lang="typescript">
	export let path: string;

	export let directionFlip: boolean = false;
	export let text = '';
</script>

<a
	href={path}
	class="relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-gray-700 transition duration-200 ease-out border-2 border-gray-700 rounded-full shadow-md group"
>
	<span
		class="absolute inset-0 flex items-center justify-center w-full h-full duration-300 translate-x-full text-gray-700 group-hover:translate-x-0 ease"
	>
		<svg
			class="w-6 h-6 transform {directionFlip ? 'rotate-180' : ''}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M14 5l7 7m0 0l-7 7m7-7H3"
			/></svg
		>
	</span>
	<span
		class="absolute flex items-center justify-center w-full h-full text-gray-700 transition-all duration-300 transform group-hover:-translate-x-full ease"
		>{text}</span
	>
	<span class="relative invisible">{text}</span>
</a>
