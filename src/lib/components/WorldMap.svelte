<script>
    import { onMount } from "svelte";

    let scrollY = 0;
    let imageIndex = 1;
    let sectionIndex = 1;

    // Scroll event handler
    function handleScroll() {
        scrollY = window.scrollY;

        if (scrollY > window.innerHeight / 2) {
            imageIndex = 2;
        } else {
            imageIndex = 1;
        }

        if (scrollY > window.innerHeight / 2) {
            sectionIndex = 2;
        } else {
            sectionIndex = 1;
        }
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<section class="component">
    <section class="filled-component">
        <section class="images">
            <img
                src="/images/landen.png"
                alt="World Map"
                class:show={imageIndex === 1}
            />

            <img
                src="/images/landen-wit.png"
                alt="G20 Countries"
                class:show={imageIndex === 2}
            />
        </section>

        <section class="text">
            <section
                class="introduction"
                class:show={sectionIndex === 1}
            >
                <h1>Introductie</h1>
                <p>
                    De Verenigde Naties is een plek waar alle landen samenkomen om bij thema’s verschillende resolutie te bespreken. Niet elk land is het met
                    elkaar eens dus wordt er over de verschillende resoluties gestemd. Maar op wat kun je stemmen en wat veroorzaakt de meeste verdeeldheid?
                </p>
            </section>
            <section
                class="g20"
                class:show={sectionIndex === 2}
            >
                <h1>G20</h1>
                <p>
                    We kijken hier naar de g20. Een bondgenootschap bestaande uit 19 landen, de Europese Unie en de Afrikaanse Unie. Samen vertegenwoordigen ze
                    de grootste economieën ter wereld. Samen staan de G20-landen voor ongeveer twee derde van de wereldbevolking, 85% van de wereldwijde
                    inkomsten (bbp), en ruim 75% van de wereldhandel.
                </p>
                <p>
                    Deze groep komt elk jaar samen om economische onderwerpen te bespreken. We gaan kijken naar de verdeeldheid tussen de G20 landen die stemmen
                    over de verschillende vraagstukken in de verschillende thema’s.
                </p>
            </section>
        </section>
    </section>
    <section class="empty-component"></section>
</section>

<style>
    @media screen and (width > 1rem) {
        .component {
            height: 200vh;
            position: relative;
        }

        .component > section {
            height: 100vh;
            width: 100vw;
            scroll-snap-align: start;
            padding: 2em;
        }

        .filled-component,
        .empty-component {
            position: sticky;
            top: 0;
        }

        .images,
        .text {
            position: sticky;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .text {
            color: antiquewhite;
        }

        img {
            position: absolute;
            top: 0;
            object-fit: cover;
            z-index: 1;
            max-width: 45em;
            transition: opacity 0.75s ease;
        }

        img:not(.show) {
            opacity: 0;
        }

        .introduction,
        .g20 {
            position: absolute;
            top: 55vw;
            display: flex;
            flex-direction: column;
            gap: 0.5em;
            width: 80vw;
            max-width: 45em;
            padding-bottom: 0;

            opacity: 0;
            transform: translateY(20px);
            transition:
                opacity 0.5s ease,
                transform 0.75s ease;
        }
        .introduction {
            top: 40vh;
        }

        .introduction.show,
        .g20.show {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media screen and (width > 38rem) {
        .introduction,
        .g20 {
            top: 52vw;
        }
    }

    @media screen and (width > 57rem) {
        .introduction,
        .g20 {
            top: 58vh;
        }
    }
</style>
