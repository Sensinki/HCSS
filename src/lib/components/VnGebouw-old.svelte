<script>
</script>

<section>
    <section class="component">
        <section>
            <h1>Verdeeldheid van de G20 in 2023</h1>
            <h3>Bekijk het in het VN gebouw</h3>

        </section>

        <section>
        <img src="/images/flag-red.png" alt="Red flag">
        <img
            src="/images/vn.png"
            alt="VN Building"
            id="vn"
        />
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
            background-color: #1a3761;
            color: #efefef;

            img {
                max-width: 3em;
                height: auto;
            }
            #vn {
                max-width: 10em;
                justify-self: center;
                align-self: self-start;
            }

            section {
                display: flex;
                flex-direction: column;
                gap: 1em;
                width: 80vw;
                max-width: 40em;
            }
        }
    }

    @media screen and (width > 24rem) {
        .component {
            #vn {
                max-width: 12.5em;
            }
        }
    }

    @media screen and (width > 55rem) {
        .component {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 3em;

            section {
                order: -1;
            }

            #vn {
                justify-self: end;
                align-self: center;

                max-width: 20em;
            }
        }
    }
</style>


