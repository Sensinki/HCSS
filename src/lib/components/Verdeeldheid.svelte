<script>
</script>

<section>
    <section class="component">
        <img
            src="/images/verdeeldheid.png"
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
        .component {
            display: grid;
            justify-items: center;
            align-items: center;

            padding: 0 3em;
            background-color: #efefef;

            img {
                max-width: 15em;
                justify-self: center;
            }

            section {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 80vw;
                max-width: 40em;

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
                max-width: 30em;
            }
        }
    }
</style>
