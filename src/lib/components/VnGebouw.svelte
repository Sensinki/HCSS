<script>
</script>

<div id="arrow-end"></div>

<section class="component">
    <section>
        <section class="note">
            <div class="vertical-line"></div>
            <p>Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at.</p>
        </section>

        <ul>
            <li>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at. Id ac neque urna sit ornare mattis in.</p>
            </li>

            <li>
                <p>Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at. Id ac neque urna sit ornare mattis in.</p>
            </li>

            <li>
                <p>Lorem ipsum dolor sit amet consectetur. Id ac neque urna sit ornare mattis in.</p>
            </li>

            <li>
                <p>Pellentesque enim neque nunc amet at. Id ac neque urna sit ornare mattis in.</p>
            </li>
        </ul>
    </section>
    <img
        src="/images/vn.png"
        alt="VN Building"
    />
</section>

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
            width: unset;

            img {
                max-width: 30em;
                justify-self: center;
            }

            > section {
                display: flex;
                flex-direction: column;
                gap: 5em;
                width: 80vw;
                max-width: 30em;

                > ul {
                    display: flex;
                    flex-direction: column;
                    gap: 2em;
                    width: 70vw;
                    align-self: center;

                    li {
                        position: relative;
                        padding: 1em;
                        background-color: #efefef;
                        max-width: 20em;
                    }

                    li:nth-child(2n) {
                        align-self: self-end;
                        border-radius: 1em 1em 0 1em;
                    }

                    li:nth-child(2n):after {
                        content: "";
                        position: absolute;
                        display: block;
                        width: 0;
                        z-index: 1;
                        border-style: solid;
                        border-width: 19px 0 0 16px;
                        border-color: transparent transparent transparent #efefef;
                        top: 86%;
                        right: -16px;
                        margin-top: 0.5px;
                    }

                    li:nth-child(2n + 1) {
                        align-self: self-start;
                        border-radius: 1em 1em 1em 0;
                    }

                    li:nth-child(2n + 1):after {
                        content: "";
                        position: absolute;
                        display: block;
                        width: 0;
                        z-index: 1;
                        border-style: solid;
                        border-width: 0 0 19px 16px;
                        border-color: transparent transparent #efefef transparent;
                        top: 86%;
                        left: -16px;
                        margin-top: .5px;
                    }


                    li:nth-child(3),
                    li:nth-child(4) {
                        max-width: 15em;
                    }

                    li:nth-child(1),
                    li:nth-child(4) {
                        margin: 0 15%;
                    }

                    li:nth-child(2),
                    li:nth-child(3) {
                        margin: 0 5%;
                    }
                }

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
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2em;

            section {
                order: -1;
            }

            img {
                justify-self: end;
            }
        }
    }
</style>
