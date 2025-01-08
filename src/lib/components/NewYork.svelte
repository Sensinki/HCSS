<script>
</script>

<section class="verdeeldheid">
    <img
        src="/images/newyork.png"
        alt="Verdeeldheid"
    />
    <section>
        <section class="note">
            <div class="vertical-line"></div>
            <p>
                Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at.
            </p>
        </section>

    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        .verdeeldheid {
            display: grid;
            justify-items: center;
            align-items: center;

            padding: 0 2em;
            background-color: #efefef;

            img {
                max-width: 30em;
                justify-self: center;
            }

            section {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 80vw;
                max-width: 30em;
            }
        }
    }

    @media screen and (width > 52rem) {
        .verdeeldheid {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1em;

            section {
                order: -1;
            }

            img {
                max-width: 35em;
                justify-self: end;
            }
        }
    }
</style>
