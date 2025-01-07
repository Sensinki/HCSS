<script>
    // export let message = 'Hallo Wereld!';
</script>

<!-- <p>{message}</p> -->
<section>
    <img
        src="/images/landen.png"
        alt="World Map"
    />
    <div class="alignment">
        <h1>Titel h1</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur. Pellentesque enim neque nunc amet at. Id ac neque urna sit ornare mattis in. Fames praesent venenatis erat
            commodo habitant eget. Et lorem morbi pellentesque arcu cursus malesuada lacus.
        </p>
    </div>
</section>

<style>
    @media screen and (width > 1rem) {
        section {
            display: grid;
            justify-items: center;
            align-items: center;

            img {
                width: 80vw;
                max-width: 45em;
                margin: 3em 0;
            }

            .alignment {
                display: flex;
                flex-direction: column;
                gap: 0.5em;
                width: 80vw;
                max-width: 40em;
            }
        }
    }

    @media screen and (width > 38rem) {
    }
</style>
