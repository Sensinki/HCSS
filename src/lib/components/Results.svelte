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
        <section>
            <h1>Results</h1>
            <p>The results of the resolutions show how the G20 divides or agrees. This is shown in Yes, No or Abstain</p>
            <p>Zooming in gives you insight into how decision-making works and where divisions occur</p>

            <img
                src="/images/results.png"
                alt="Verdeeldheid"
            />

            <ul>
                <li>
                    <div id="groen"></div>
                    <p>Yes</p>
                </li>
                <li>
                    <div id="rood"></div>
                    <p>No</p>
                </li>
                <li>
                    <div id="grijs"></div>
                    <p>Abstain</p>
                </li>
            </ul>
        </section>
    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        .component {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 1em;

            padding: 0 3em;

            img {
                max-width: 15em;
                justify-self: center;
                align-self: center;
                margin-top: 2em;
                opacity: 0;
                animation: fadeIn 2s ease forwards;
            }

            section {
                display: flex;
                flex-direction: column;
                justify-items: center;
                align-items: center;
                gap: 1em;
                width: 80vw;
                max-width: 40em;

                ul:nth-of-type(1) {
                    li {
                        list-style: inside;
                        /* padding-left: 1em; */
                        font-weight: bold;
                    }
                }
                ul {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    gap: .75em;
                    padding-top: 1.5em;

                    max-width: 25em;

                    li {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 0.25em;

                        opacity: 0;
                        animation: fadeIn 0.8s ease forwards;

                        div {
                            width: 100%;
                            max-width: 7.5em;
                            height: 1.5em;
                            background-color: #efefef;
                        }
                    }

                    li:nth-of-type(1) {
                        animation-delay: 0s;
                    }
                    li:nth-of-type(2) {
                        animation-delay: 0.5s;
                    }
                    li:nth-of-type(3) {
                        animation-delay: 1s;
                    }
                }
            }

            h1 {
                margin-bottom: 0.5em;
            }
        }
    }

    @media screen and (width > 24rem) {
        .component {
            img {
                max-width: 20em;
            }
        }
    }

    @media screen and (width > 55rem) {
        .component {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 2em;

            section {
                order: -1;
            }

            img {
                justify-self: end;
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
