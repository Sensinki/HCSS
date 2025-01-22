<script>
    import { onMount } from "svelte";

    let h1Element;
    let isVisible = false;
    let text = "Verdeeldheid van de G20 in 2023. Bekijk het in het VN gebouw";
    let displayedText = "";
    let animationStarted = false;

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            displayedText += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Her harf arası 100 ms
        } else {
            // Yazma efekti bitince diğer animasyonları başlat
            startOtherAnimations();
        }
    }

    function startOtherAnimations() {
        // Diğer animasyonları başlatmak için sınıf ekleyin
        animationStarted = true;
    }

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisible = true;
                        typeEffect(); // Yazma efekti başlayacak
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
                background-color: #efefef;
            }

            #arrow-end {
                width: 0;
                height: 0;
                border-left: 50vw solid transparent;
                border-right: 50vw solid transparent;
                border-top: 20vh solid #efefef;
            }

            > section:nth-of-type(2) {
                position: absolute;
                top: 40vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100vw;
                order: 2;
                overflow: hidden;
            }

            h1 {
                width: 80vw;
                max-width: 40em;
                font-size: 20pt;
                line-height: 24pt;
            }

            img {
                width: unset;
                max-width: 40em;
                overflow: hidden;
                z-index: 2;
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

            #arrow-end {
                border-top: 15vh solid #efefef;
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
