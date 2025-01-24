<script>
    import { onMount } from "svelte";

    let scrollY = 0;
    let imageIndex = 1;
    let sectionIndex = 1;

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
                <h1>Welke thema's veroorzaken de meeste verdeeldheid binnen de G20 in stemgedrag binnen de VN?</h1>
            </section>
            <section
                class="g20"
                class:show={sectionIndex === 2}
            >
                <section>
                    <h1>G20</h1>
                    <p>De Groep van 20. De G20 bestaat uit de grootste economieën ter wereld. Een invloedrijk blok dat samen 2/3 van de wereldbevolking,</p>
                    <p class="quote">“Een enorme economische en politieke macht”</p>
                    <p>Maar hoe stemmen deze landen over belangrijke resoluties binnen de Verenigde Naties? En waar liggen de grootste verschillen?</p>
                </section>
                <section class="outlined">
                    <h5>85% van het mondiale bbp</h5>
                    <h5>Vertegenwoordigd de wereldhandel meer dan 75%</h5>
                </section>
            </section>
        </section>
    </section>
    <section class="empty-component"></section>
</section>
<img
    src="/images/visual-bottomright.png"
    alt="visual"
    class="animation"
/>

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

        .animation {
            position: sticky;
            top: unset;
            bottom: -6em;
            right: unset;
            left: 60em;
            width: 40em;
            height: auto;

            opacity: 0.35 !important;

            z-index: 0;
            animation: moveBackground 10s cubic-bezier(0.42, 0, 0.58, 1) infinite reverse;
        }

        .text {
            color: antiquewhite;
            position: relative;
        }

        img {
            position: absolute;
            top: 0;
            object-fit: cover;
            z-index: 1;
            max-width: 40em;
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

        .introduction.show,
        .g20.show {
            opacity: 1;
            transform: translateY(0);
        }

        .introduction {
            top: 35vh;
            flex-direction: row;
        }

        .g20 {
            gap: 1em;
            flex-direction: column;
        }

        p {
            font-size: 12pt;
            line-height: 16pt;
            max-width: 30em;
        }
        .quote {
            font-weight: bold;
            padding: 1em 0;
        }

        .outlined {
            display: flex;
            flex-direction: column;
            gap: 1em;
            justify-content: center;
            max-width: 40em;

            h5 {
                padding: 0.5em;
                border: 2px solid #efefef;
            }
        }

        /* .outlined {
            display: flex;
            flex-direction: column;
            gap: 1em;
            justify-content: end;

            h5 {
                padding: 1em;
                border: 2px solid #efefef;
            }
        } */
    }

    @media screen and (width > 38rem) {
        .introduction,
        .g20 {
            top: 48vw;
        }

        .g20 {
            gap: 2em;
            flex-direction: row;
        }

        .outlined {
            display: flex;
            flex-direction: column;
            gap: 1em;
            justify-content: start;
            max-width: 20em;

            h5 {
                padding: 1em;
            }
        }
    }

    @media screen and (width > 57rem) {
        .introduction,
        .g20 {
            top: 50vh;
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
