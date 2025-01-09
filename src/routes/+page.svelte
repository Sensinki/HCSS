<script>
    import WorldMap from "$lib/components/WorldMap.svelte";
    import Verdeeldheid from "$lib/components/Verdeeldheid.svelte";
    import NewYork from "$lib/components/NewYork.svelte";
    import Manhattan from "$lib/components/Manhattan.svelte";
    import VnGebouw from "$lib/components/VnGebouw.svelte";
</script>

<header></header>

<main>
    <WorldMap />
    <Verdeeldheid />
    <div class="space"></div>
    <NewYork />
    <div class="space"></div>
    <Manhattan />
    <VnGebouw />
</main>

<style>
    @media screen and (width > 1rem) {
        /* GLOBAL */
        :global(*) {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            /* font-family: ; */
            font-family: "neue-haas-grotesk-display", Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        :global(body) {
            background-color: #1a3761;
        }

        /* HEADER */
        header {
            width: 100vw;
            height: 4em;
            background-color: #efefef;
        }

        /* TITELS */
        :global(h1) {
            font-weight: 600;
            font-size: 56pt;
            line-height: 56pt;
        }

        :global(h2) {
            font-weight: 600;
            font-size: 42pt;
            line-height: 42pt;
        }

        :global(h3) {
            font-weight: 600;
            font-size: 32pt;
            line-height: 36pt;
        }

        :global(h4) {
            font-weight: 600;
            font-size: 25pt;
            line-height: 28pt;
        }
        :global(h5) {
            font-weight: 600;
            font-size: 20pt;
            line-height: 14pt;
        }

        /* voor citaten */
        :global(h6) {
            font-weight: 600;
            font-size: 16pt;
            line-height: 20pt;
        }

        :global(p) {
            font-weight: 400;
            font-size: 16pt;
            line-height: 20pt;

            max-width: 40em;
        }

        /* IMAGES */
        :global(img) {
            width: 80vw;
            margin: 3em 0;
        }

        /* LIST ITEMS */
        :global(li) {
            list-style: none;
        }

        main {
            display: flex;
            flex-direction: column;
        }

        /* SPACE BETWEEN COMPONENTS */
        .space {
            height: 20vh;
            width: 100vw;
            background-color: #efefef;
        }
    }

    @media screen and (width > 38rem) {
    }
</style>
