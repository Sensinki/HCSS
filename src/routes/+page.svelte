<script>
    import WorldMap from "$lib/components/WorldMap.svelte";
    import Verdeeldheid from "$lib/components/Verdeeldheid.svelte";
    import Themas from "$lib/components/Themas.svelte";
    import Resoluties from "$lib/components/Resoluties.svelte";
    import Results from "$lib/components/Results.svelte";
    import VnBuilding from "$lib/components/VnBuilding.svelte";

    import { isScrollingDown, isScrollingUp, isScrolling } from "../stores/scroll.js";
</script>

<header></header>

<main>
    <WorldMap />
    <div id="arrow-start"></div>

    <Verdeeldheid />
    <div class="space"></div>

    <Themas />
    <div class="line"><div></div></div>

    <Resoluties />
    <div class="line"><div></div></div>

    <Results />
    <div class="space"></div>

    <VnBuilding />

    <a
        href="/"
        class:hide={$isScrolling || $isScrollingUp}>Go to treemap</a
    >
    <img
        src="/images/gina.png"
        alt="Gina Diplomatic"
    />
    <!-- <img
        src="/images/visual-bottomright.png"
        alt="visual"
        class="animation"
    /> -->
</main>

<style>
    @media screen and (width > 1rem) {
        a {
            position: fixed;
            top: 92vh;
            right: 1em;
            left: 50%;
            transform: translateX(-50%);
            width: 12em;

            background-color: #a9abb8;
            padding: 0.75em 2em;
            border-radius: 0.5em;
            text-decoration: none;
            text-align: center;
            color: #efefef;
            font-weight: bold;
            transition:
                opacity 0.3s ease,
                visibility 0.3s ease;
            opacity: 1;
            visibility: visible;
            z-index: 1000;
        }

        a.hide {
            opacity: 0.65;
        }

        img:nth-of-type(1) {
            position: fixed;
            top: 20vh;
            left: 5vw;
            width: 85vw;

            z-index: 0;
            animation: moveBackground 10s cubic-bezier(0.42, 0, 0.58, 1) infinite;
        }

        /* img:nth-of-type(2) {
            position: fixed;
            bottom: -3em;
            right: -4em;
            width: 40em;
            height: auto;

            opacity: 0.1;

            z-index: 0;
            animation: moveBackground 10s cubic-bezier(0.42, 0, 0.58, 1) infinite reverse;
        } */

        /* GLOBAL */
        :global(*) {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: "neue-haas-grotesk-display", Arial, Helvetica, sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        :global(body) {
            background-color: #1a3761;
        }

        /* scroll snap */
        :global(html) {
            scroll-snap-type: y mandatory;
        }

        :global(main > section) {
            height: 100vh;
            width: 100vw;
            scroll-snap-align: start;
        }

        :global(.component) {
            width: 100vw;
            height: 100vh;
        }

        /* TITELS */
        :global(h1) {
            font-weight: 600;
            font-size: 32pt;
            line-height: 40pt;
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
            line-height: 18pt;
        }

        /* voor citaten */
        :global(h6) {
            font-weight: 600;
            font-size: 16pt;
            line-height: 20pt;
        }

        :global(p) {
            font-weight: 400;
            font-size: 11pt;
            line-height: 20pt;

            max-width: 40em;
        }

        /* IMAGES */
        :global(img) {
            width: 80vw;
            z-index: 2;
        }

        /* LIST ITEMS */
        :global(li) {
            list-style: none;
        }

        :global(main) {
            display: flex;
            flex-direction: column;
        }

        /* SPACE BETWEEN COMPONENTS */
        .space {
            height: 20vh;
            width: 100vw;
            background-color: #efefef;
        }

        .line {
            height: 20vh;
            width: 100vw;
            background-color: #efefef;
            display: flex;
            justify-content: center;
        }
        .line div {
            height: 15vh;
            width: 0.3em;
            background-color: #1a3761;
            border-radius: 0.5em;
        }

        #arrow-start {
            width: 0;
            height: 0;
            border-left: 50vw solid transparent;
            border-right: 50vw solid transparent;
            border-bottom: 30vh solid #efefef;
        }
    }

    @media screen and (width > 24rem) {
    }

    @media screen and (width > 38rem) {
        a {
            top: 87vh;
            opacity: 1;
        }

        :global(h1) {
            font-weight: 600;
            font-size: 42pt;
            line-height: 42pt;
        }
        :global(p) {
            font-size: 14pt;
            line-height: 20pt;
        }
    }

    /* ANIMATIONS */
    @keyframes moveBackground {
        0% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(5px, -5px);
        }
        50% {
            transform: translate(10px, 5px);
        }
        75% {
            transform: translate(5px, 10px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
</style>
