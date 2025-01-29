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
            <h1>Resoluties</h1>

            <p>
                Within the United Nations, resolutions are drafted to address various topics and these are discussed by the general assembly where the G20 is
                part of.
            </p>
            <p>Using data from Gina Diplomatic, the divisions in resolutions are analyzed.</p>
        </section>

        <img
            src="/images/resoluties.png"
            alt="Resoluties"
        />
    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        .component {
            display: grid;
            justify-items: center;
            align-items: center;

            padding: 0 3em;

            img {
                max-width: 10em;
                justify-self: center;
                align-self: self-start;
                opacity: 0;
                animation: fadeIn 2.5s ease forwards;
            }

            section {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 80vw;
                max-width: 30em;
            }

            h1 {
                text-align: center;
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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2em;

            section {
                order: -1;
            }

            img {
                justify-self: end;
                align-self: center;

                max-width: 15em;
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
