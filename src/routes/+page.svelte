<svelte:head>
	<title>Mark Fayngersh</title>
</svelte:head>

<section>
	<h1>Mark Fayngersh</h1>

	<p>I enjoy building products, reading, philosophy, and photography.</p>
	<p>
		In 2018 I founded <a target="_blank" href="https://www.careswitch.com">Careswitch</a> with my
		friend
		<a target="_blank" href="https://twitter.com/Invisibilya">Ilya</a> to simplify home care operations
		and improve the livelihoods of caregivers.
	</p>
	<p>
		Prior to that I worked at a company called <a target="_blank" href="https://quartethealth.com/"
			>Quartet</a
		> focused on bridging the gap between primary and mental health through a modern collaborative care
		platform.
	</p>
	<p>
		My first job out of college was at <a
			target="_blank"
			href="https://www.oracle.com/corporate/acquisitions/crowdtwist/">CrowdTwist</a
		>, a startup building loyalty marketing products for consumer brands.
	</p>
	<p>I went to MIT for a year before dropping out in 2012 and starting my adventures above.</p>

	<h3><a href="/posts">Posts</a></h3>
</section>

<style lang="postcss">
	p {
		margin-top: var(--size-4);
		max-inline-size: var(--size-content-2);

		&:first-of-type {
			font-weight: var(--font-weight-6);
		}
	}

	h3 {
		display: grid;
		place-content: center;
		margin-top: var(--size-8);
		inline-size: var(--size-12);
		border-radius: var(--radius-blob-5);
		aspect-ratio: var(--ratio-square);
		background: var(--gray-2);

		@media (--OSdark) {
			background: var(--gray-8);
		}
	}
</style>
