<script>
    import WorldMap from "$lib/components/WorldMap.svelte";
</script>

<header></header>

<div>
    <WorldMap />
</div>

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
        }



        /* HEADER */
        header {
            width: 100vw;
            height: 4em;
            background-color: #efefef;
        }
    }

    @media screen and (width > 38rem) {
    }
</style>