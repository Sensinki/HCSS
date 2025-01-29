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
                <h1>Which issues cause the most division within the G20 in voting behavior at the UN?</h1>
            </section>
            <section
                class="g20"
                class:show={sectionIndex === 2}
            >
                <section>
                    <h1>The Group Of 20</h1>
                    <p>The G20 consists of the largest economies in the world. An influential bloc that together represents 2/3 of the world's population,</p>
                    <p class="quote">“A huge economic and political power”</p>
                    <p>But how do these countries vote on important resolutions within the United Nations? And where are the biggest differences?</p>
                </section>
                <section class="numbers">
                    <h2>19+ countries</h2>
                    <h2>2 <br> unions</h2>
                </section>
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
        .numbers {
            position: absolute;
            top: -45vw;
            text-align: center;
            width: max-content;
            display: flex;
            flex-direction: column;
            gap: 2em;
        }
        .component h2 {
            font-size: 10vw;
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
            position: relative;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        h1 {
            text-align: center;
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
            justify-content: center;
            align-items: center;
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

            h1 {
                padding: 0 0 0.5em 0;
            }
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

        .numbers {
            top: -30vw;
            flex-direction: row;
            gap: 3em;
        }

        .component h2 {
            font-size: 42pt;
            width: 4em;
        }

    }

    @media screen and (width > 57rem) {
        .introduction,
        .g20 {
            top: 50vh;
        }

        .numbers {
            top: -22vw;
            gap: 3em;
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
