<script>
</script>

<section>
    <div id="arrow-start"></div>
    <section class="component">
        <img
            src="/images/verdeeldheid.png"
            alt="Verdeeldheid"
        />
        <section>
            <h2>Verdeeldheid</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at. Id ac neque urna sit ornare mattis in. Fames praesent venenatis
                erat commodo habitant eget. Et lorem morbi pellentesque arcu cursus malesuada lacus.
            </p>

            <!-- NA DESIGN VERANDEREN -->
            <h5>Thema’s</h5>
            <ul>
                <li>
                    <div id="blauw"></div>
                    <p>Defense & Security</p>
                </li>
                <li>
                    <div id="groen"></div>
                    <p>Climate, Energy & Resources</p>
                </li>
                <li>
                    <div id="oranje"></div>
                    <p>Cyber policy & Resilience</p>
                </li>
                <li>
                    <div id="geel"></div>
                    <p>Geopolitics & Geo-economics</p>
                </li>
            </ul>
            <!-- NA DESIGN VERANDEREN -->
        </section>
    </section>
</section>

<style>
    @media screen and (width > 1rem) {
        #arrow-start {
            width: 0;
            height: 0;
            border-left: 50vw solid transparent;
            border-right: 50vw solid transparent;
            border-bottom: 40vh solid #efefef;
        }
        
        .component {
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

                /* NA DESIGN VERANDEREN  */
                h5 {
                    font-weight: 700;
                    padding-top: 0.5em;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;

                    li {
                        display: flex;
                        flex-direction: row;
                        gap: 0.5em;

                        div {
                            width: 1.5em;
                            height: 1.5em;
                            border-radius: 1em;
                        }

                        #blauw {
                            background-color: #82a0bc;
                        }

                        #groen {
                            background-color: #a4a58d;
                        }

                        #oranje {
                            background-color: #c48469;
                        }

                        #geel {
                            background-color: #d79c5a;
                        }
                    }
                }
                /* NA DESIGN VERANDEREN  */
            }
        }
    }

    @media screen and (width > 52rem) {
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
