<script>
</script>


<section class="component">
    <section>
        <section class="note">
            <div class="vertical-line"></div>
            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at.</p>
        </section>

        <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at. Id ac neque urna sit ornare mattis in. Fames praesent venenatis erat
            commodo habitant eget.
        </p>

    </section>
    <img
        src="/images/newyork.png"
        alt="New York Map"
    />
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
                max-width: 30em;
                justify-self: center;
            }

            > section {
                display: flex;
                flex-direction: column;
                gap: 3em;
                width: 80vw;
                max-width: 30em;

                /* > p {
                    margin: 1em;
                } */

                .note {
                    display: flex;
                    flex-direction: row;
                    gap: 1em;
                    background-color: #a9abb8;
                    padding: 1.5em;
                    max-width: 30em;
                    border-radius: 1em;

                    .vertical-line {
                        width: 1em;
                        /* height: inherit; */
                        background-color: #1a3761;

                        border-radius: 1em;
                    }
                }
            }
        }
    }

    @media screen and (width > 55rem) {
        .component {
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
