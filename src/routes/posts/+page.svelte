<svelte:head>
	<title>Posts | Mark Fayngersh</title>
</svelte:head>

<section>
	<h1>Posts</h1>

	<div class="posts">
		<div class="post">
			<h4><a href="/posts/the-thinking-placebo">The Thinking Placebo</a></h4>
			<p>
				The list of human abilities that computers cannot do is swiftly diminishing, and we may want
				to be wary of how our current epistemology of thinking confounds the progress being made and
				its implications.
			</p>
			<p class="date">July 21, 2020</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.posts {
		display: grid;
		gap: var(--size-4);
		margin-top: var(--size-4);
	}

	.post {
		display: grid;
		gap: var(--size-1);

		& .date {
			font-weight: var(--font-weight-6);
		}
	}
</style>
