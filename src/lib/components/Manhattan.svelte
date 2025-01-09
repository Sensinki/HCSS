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

        <ul>
            <li>
                <img
                    src="/images/icons/monitor.png"
                    alt="Monitor icon"
                />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
                <img
                    src="/images/icons/signal.png"
                    alt="Signal icon"
                />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
            <li>
                <img
                    src="/images/icons/info.png"
                    alt="Info icon"
                />
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </li>
        </ul>
    </section>
    <img
        src="/images/manhattan.png"
        alt="Manhattan Map"
    />
</section>
    <div id="arrow-end"></div>


<style>
    @media screen and (width > 1rem) {
        #arrow-end {
            width: 0;
            height: 0;
            border-left: 50vw solid transparent;
            border-right: 50vw solid transparent;
            border-top: 30vh solid #efefef;
        }

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

                ul {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: center;
                    gap: 2em;

                    li {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 1em;
                        width: 8em;

                        img {
                            width: 3em;
                            margin: 1em 0;
                        }

                        p {
                        }
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
            gap: 2em;

            section {
                order: -1;
            }

            img {
                max-width: 30em;
                justify-self: end;
            }
        }
    }
</style>
