<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
    let name = 'wereld';
</script>

<style>
    h1 {
        color: teal
    }
</style>

<h1>Hallo {name}!</h1>
<input bind:value={name} placeholder="Voer je naam in" />
