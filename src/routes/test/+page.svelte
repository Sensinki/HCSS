<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
    let name = 'wereld';
    import MyComponentTest from '$lib/components/MyComponentTest.svelte';
</script>

<style>
    h1 {
        color: teal;
    }
</style>

<h1>Hallo {name}!</h1>
<input bind:value={name} placeholder="Voer je naam in" />


<!-- testen of het component werkt -->
<h1>Welkom op mijn website</h1>
<MyComponentTest message="Dit is een dynamisch component! HET LUKT :)" />
