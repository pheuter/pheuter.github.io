<main>
	<slot />
</main>

<style lang="postcss">
	:root {
		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-text-size-adjust: 100%;
	}

	main {
		padding: var(--size-5);

		@media (--md-n-above) {
			padding: var(--size-10);
		}
	}
</style>
