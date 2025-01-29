<script>
    import { onMount } from "svelte";

    let marqueeElements;

    onMount(() => {
        marqueeElements = document.querySelectorAll(".marquee-content");

        marqueeElements.forEach((marquee) => {
            const clone = marquee.cloneNode(true);
            marquee.parentElement.appendChild(clone);
        });
    });
</script>

<section class="component">
    <section>
        <h1>Why is the G20 important?</h1>
        <p>
            The G20 countries have enormous influence on international decision-making. Their discussions often form the basis for the agendas of other
            international organizations, such as the United Nations (UN). Decisions made here can have a huge impact worldwide.
        </p>
    </section>

    <section class="marquee">
        <div class="marquee-wrapper">
            <div class="marquee-content">
                <p>They represent 2/3 of the world's population</p>
                <p>Represents more than 75% of world trade.</p>
                <p>85% of global GDP</p>
            </div>
            <div class="marquee-content">
                <p>They represent 2/3 of the world's population</p>
                <p>Represents more than 75% of world trade.</p>
                <p>85% of global GDP</p>
            </div>
        </div>
    </section>
</section>

<style>
    .component {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4em;
    }

    section:nth-of-type(1) {
        padding: 0 3em;
        h1 {
            padding-bottom: .5em;
        }
    }

    .marquee {
        width: 100%;
        overflow: hidden;
        position: relative;
        white-space: nowrap;
        padding: 1em 0;
    }

    .marquee-wrapper {
        display: flex;
        width: max-content;
        animation: scroll 25s linear infinite;
    }

    .marquee-content {
        display: flex;
        gap: 3em;
    }

    .marquee p {
        font-size: 28pt;
        font-weight: bold;
        white-space: nowrap;
        border: solid 0.1em #efefef;
        padding: 0.5em;

        &:last-of-type {
            margin-right: 3rem;
        }
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }
</style>
