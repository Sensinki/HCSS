<script>
    import { onMount } from "svelte";

    onMount(() => {
        const listItems = document.querySelectorAll("ul li");

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
        <ul>
            <li>
                <img
                    src="/images/flags/france.png"
                    alt="France Icon"
                />
            </li>
            <li>
                <img
                    src="/images/flags/germany.png"
                    alt="Germany Icon"
                />
            </li>
            <li>
                <img
                    src="/images/flags/india.png"
                    alt="India Icon"
                />
            </li>
        </ul>
        <section>
            <h1>The UN</h1>

            <p>Founded in 1945 and comprising 193 member states, the United Nations (UN) promotes peace, stability and international cooperation.</p>
            <p>From its iconic headquarters in New York, countries discuss global issues and make decisions on topics such as economics and human rights.</p>
            <p>
                The UN flagpoles, in a circle with equal spacing, symbolise equality among member states, while the General Assembly building is the heart of
                decision-making.
            </p>
        </section>

        <ul>
            <li>
                <img
                    src="/images/flags/indonesia.png"
                    alt="France Icon"
                />
            </li>
            <li>
                <img
                    src="/images/flags/russia.png"
                    alt="Germany Icon"
                />
            </li>
            <li>
                <img
                    src="/images/flags/italy.png"
                    alt="India Icon"
                />
            </li>
        </ul>
    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        .component {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4em;

            padding: 0 3em;

            img {
                width: 5em;
            }

            section:nth-of-type(1) {
                display: flex;
                flex-direction: column;
                gap: 2em;
            }

            /* THEMA'S */
            ul {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 1fr;
                grid-gap: 2em;
                justify-content: center;
                align-items: stretch;
                align-self: center;

                padding: 0.5em;
                z-index: 1;
            }

            li {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;

                justify-content: center;
                align-items: center;
                gap: 1em;

                padding: 0.25em;

                opacity: 0;
                animation: fadeIn 0.8s ease forwards;

                p {
                    font-weight: bold;
                }
            }

            ul li:nth-child(1) {
                animation-delay: 0s;
            }

            ul li:nth-child(2) {
                animation-delay: 0.5s;
            }

            ul li:nth-child(3) {
                animation-delay: 0.75s;
            }

            ul li:nth-child(4) {
                animation-delay: 1s;
            }

            ul li:nth-child(5) {
                animation-delay: 1.25s;
            }

            ul li:nth-child(6) {
                animation-delay: 1.5s;
            }
        }

        h1 {
            text-align: center;
            margin-bottom: 0.5em;
        }
    }

    @media screen and (width > 24rem) {
        .component {
        }
    }

    @media screen and (width > 55rem) {
        .component {
            flex-direction: row;

            img {
                width: 6em;
            }

            ul {
                display: grid;
                grid-template-rows: 1fr 1fr 1fr;
                grid-template-columns: 1fr;
                gap: 4em;
                align-self: center;
                max-width: 90vw;
                max-height: 80vh;
                padding: 1em;
            }

            ul:nth-of-type(1) li:nth-of-type(1),
            ul:nth-of-type(1) li:nth-of-type(3) {
                padding-left: 3em;
            }

            ul:nth-of-type(2) li:nth-of-type(2) {
                padding-left: 3em;
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
