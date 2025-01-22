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
                Resoluties zijn officiële besluiten of uitspraken die door een organisatie, zoals de Verenigde Naties (VN), worden aangenomen. Ze kunnen over
                allerlei onderwerpen gaan, waaronder de zes thema’s die we bespreken.
            </p>
            <p>De G20-leden stemmen hierover, en afhankelijk van de uitkomst kan een resolutie worden aangenomen.</p>
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
            background-color: #efefef;

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
                max-width: 40em;
            }
        }
    }

    @media screen and (width > 24rem) {
        .component {
            img {
                max-width: 12.5em;
            }
        }
    }

    @media screen and (width > 55rem) {
        .component {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 3em;

            section {
                order: -1;
            }

            img {
                justify-self: end;
                align-self: center;

                max-width: 20em;
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
