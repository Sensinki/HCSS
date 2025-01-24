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
            <h1>Thema's</h1>

            <p>
                Ontdek hoe de G20 stemt over belangrijke thema's en waar de grootste verschillen liggen. Dit gebeurt in het VN-gebouw, waar landen stemmen over
                resoluties die de wereld vormgeven.
            </p>
        </section>

        <ul>
            <li>
                <img
                    src="/images/icons/Human_Rights.svg"
                    alt="Human Rights Icon"
                />
                <p>Human Rights</p>
            </li>
            <li>
                <img
                    src="/images/icons/Colonialism.svg"
                    alt="Colonialism Icon"
                />
                <p>Colonialism</p>
            </li>
            <li>
                <img
                    src="/images/icons/Economics.svg"
                    alt="Economics Icon"
                />
                <p>Economics</p>
            </li>
            <li>
                <img
                    src="/images/icons/Israel_Palestina_Conflict.svg"
                    alt="Israel Palestina Conflict Icon"
                />
                <p>Israel Palestina Conflict</p>
            </li>
            <li>
                <img
                    src="/images/icons/Nuclear_Weapons.svg"
                    alt="Nuclear Weapons Icon"
                />
                <p>Nuclear Weapons</p>
            </li>
            <li>
                <img
                    src="/images/icons/Arms_Control_And_Disarmament.svg"
                    alt="Arms Control and Disarment Icon"
                />
                <p>Arms Control and Disarment</p>
            </li>
        </ul>
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

            section {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 27em;
            }

            img {
                width: 3em;
            }

            /* THEMA'S */
            ul {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                grid-gap: 1.5em;
                justify-content: center;
                align-items: stretch;
                align-self: start;

                padding: 0.5em;
                z-index: 1;
            }

            li {
                display: grid;
                grid-template-columns: max-content 7em;
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
    }

    @media screen and (width > 24rem) {
        .component {
            ul {
                max-width: 60vw;
                max-height: 40vh;
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

            img {
                width: 4em;
            }

            ul {
                align-self: center;
                max-width: 90vw;
                max-height: 80vh;
                padding: 1em;
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
