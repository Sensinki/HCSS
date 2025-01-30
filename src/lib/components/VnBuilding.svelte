<script>
    import { onMount } from "svelte";

    let h1Element;
    let isVisible = false;
    let text = "G20 divisions in 2023. Watch it in the UN building";
    let displayedText = "";
    let animationStarted = false;

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            displayedText += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        } else {
            startOtherAnimations();
        }
    }

    function startOtherAnimations() {
        animationStarted = true;
    }

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisible = true;
                        typeEffect();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(h1Element);
    });
</script>

<section>
    <section class="component">
        <section>
            <h1 bind:this={h1Element}>
                {displayedText}
            </h1>
        </section>

        <div id="arrow-end"></div>

        <section>
            <img
                src="/images/vn-gebouw.png"
                alt="VN Building"
            />
            <a href="https://ginadiplomatic.app.hcss.nl/SpeechesStateLevel">Discorver more on GINA Diplomatic</a>
        </section>
    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        .component {
            background-color: #1a3761;
            position: relative;

            > section:nth-of-type(1) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 30vh;
                width: 100vw;
                background-color: transparent;
            }
            #arrow-end {
                width: 0;
                position: absolute;
                height: 0;
                rotate: 180deg;
                border-left: 50vw solid transparent;
                border-right: 50vw solid transparent;
                top: 0rem;
                border-top: 85vh solid transparent;
            }

            #arrow-end::before {
                content: "";
                position: absolute;
                top: -35rem;
                left: -50vw;
                width: 100vw;
                height: 75vh;
                background: linear-gradient(to bottom, rgba(239, 239, 239, 0.376), rgba(239, 239, 239, 0) 100%);
                clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
            }

            > section:nth-of-type(2) {
                position: absolute;
                top: 35vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100vw;
                overflow: hidden;
            }

            h1 {
                width: 80vw;
                max-width: 40em;
                font-size: 20pt;
                line-height: 24pt;
                text-align: center;
            }

            img {
                width: unset;
                max-width: 40em;
                overflow: hidden;
            }

            a {
                background-color: #efefef25;
                padding: 0.75em 2em;
                border-radius: 0.5em;
                /* text-decoration: none; */
                text-align: center;
                color: #efefef;
                font-weight: bold;
            }
        }
    }

    @media screen and (width > 24rem) {
        .component {
            h1 {
                font-size: 24pt;
                line-height: 24pt;
            }
            img {
                max-width: 50em;
            }
        }
    }

    @media screen and (width > 55rem) {
        .component {
            section {
                order: -1;
            }

            #arrow-end::before {
                top: -27rem;
            }

            h1 {
                font-size: 36pt;
                line-height: 32pt;
            }

            img {
                justify-self: end;
                align-self: center;
                max-width: 60em;
            }
        }
    }
</style>
