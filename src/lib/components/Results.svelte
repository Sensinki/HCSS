<script>
    import { onMount } from "svelte";

    onMount(() => {
        const listItems = document.querySelectorAll("img");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = "running";
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        listItems.forEach((item) => {
            item.style.animationPlayState = "paused";
            observer.observe(item);
        });
    });
</script>

<section>
    <section class="component">
        <section>
            <h1>Resultaten</h1>

            <p>Met data van Gina Diplomatic analyseren we hoe de G20 stemt over VN-resoluties.</p>
            <p>De resultaten tonen de mate van eensgezindheid of verdeeldheid.</p>
        </section>

        <section class="image-container">
            <img
                src="/images/results.png"
                alt="Results"
                class="main-image"
            />
            <img
                src="/images/vlaggen.svg"
                alt="Flag 1"
                class="overlay-image overlay-image-1"
            />
            <img
                src="/images/vlaggen.svg"
                alt="Flag 2"
                class="overlay-image overlay-image-2"
            />
            <img
                src="/images/vlaggen.svg"
                alt="Flag 3"
                class="overlay-image overlay-image-3"
            />
        </section>
    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        .component {
            display: grid;
            justify-items: center;
            align-items: center;

            padding: 0 3em;
            background-color: #efefef;

            img {
                max-width: 10em;
                justify-self: center;
                align-self: self-start;
                opacity: 0;
                animation: fadeIn 2.5s ease forwards;
            }

            section:nth-of-type(1) {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 80vw;
                max-width: 30em;
            }

            section:nth-of-type(2) {
                position: relative;
                width: fit-content;
                /* margin: auto; */
            }

            .main-image {
                display: block;
                max-width: 15em;
            }

            .overlay-image {
                position: absolute;
                max-width: 60%;
                top: 0;
                left: 0;
                z-index: 3;
            }

            .overlay-image-1 {
                top: 10%;
                left: 20%;
                animation-delay: 0.5s;
            }

            .overlay-image-2 {
                top: 42%;
                left: 20%;
                animation-delay: 1s;
            }

            .overlay-image-3 {
                top: 75%;
                left: 20%;
                animation-delay: 1.5s;
            }
        }
    }

    @media screen and (width > 24rem) {
        .component {
            img {
                max-width: 15em;
            }
        }
    }

    @media screen and (width > 55rem) {
        .component {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5em;

            section {
                order: -1;
            }

            img {
                justify-self: end;
                align-self: center;

                max-width: 20em;
            }

            .main-image {
                max-width: 25em;
            }
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
