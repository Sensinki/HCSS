<script>
    import { onMount } from "svelte";

    onMount(() => {
        const listItems = document.querySelectorAll("ul li");

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = "running";
                        observer.unobserve(entry.target); // Bir kez animasyon başladıktan sonra gözlemlemeyi bırak
                    }
                });
            },
            { threshold: 0.1 }
        );

        listItems.forEach((item) => {
            item.style.animationPlayState = "paused"; // Animasyon başlangıçta duraklatılmış
            observer.observe(item);
        });
    });
</script>

<section>
    <section class="component">
        <img
            src="/images/landen-last-version.png"
            alt="Verdeeldheid"
        />
        <section>
            <h1>Verdeeldheid</h1>
            <p>
                Bij elke resolutie wordt gestemd, en wij laten zien wie wat heeft gestemd. Om de verdeeldheid te tonen, wordt dit visueel weergegeven. Maar wat
                bedoelen we met verdeeldheid?
            </p>
            <p>
                Dit meten we met de coëfficiënt van variatie (CV), een maatstaf die laat zien hoe de stemmen (Ja, Nee en Abstain) verdeeld zijn. Een hoge CV
                betekent grote verschillen in meningen, terwijl een lage CV juist op eensgezindheid wijst.
            </p>

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
            justify-content: flex-start;
            align-items: center;

            gap: 1em;

            padding: 0 3em;
            background-color: #efefef;

            img {
                max-width: 10em;
                justify-self: center;
                margin-top: 2em;
                opacity: 0;
                animation: fadeIn 2s ease forwards;
            }

            section {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 80vw;
                max-width: 40em;

                ul {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5em;

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
                        }

                        #groen {
                            background-color: #78ad5d;
                        }

                        #rood {
                            background-color: #c46969;
                        }

                        #grijs {
                            background-color: #a9abb8;
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
        }
    }

    @media screen and (width > 24rem) {
        .component {
            img {
                max-width: 13em;
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
